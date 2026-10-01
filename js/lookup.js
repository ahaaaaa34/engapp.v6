// lookup.js — 問題中の英単語を長押しすると日本語の意味をポップアップ表示する
(function () {
  const ROOT_IDS = ['q-text', 'opts', 'exc-ctx', 'pool-area', 'exb-zone', 'fb-card', 'fill-zone'];
  const WORD_RE  = /[A-Za-z][A-Za-z'’]*(?:-[A-Za-z]+)*/g;
  const SKIP_SEL = '.w, input, textarea, script, style, .wchip-ans, .drag-ghost, [data-nolookup]';
  const HOLD_MS  = 450;

  const norm = s => s.replace(/’/g, "'").toLowerCase();

  /* ── 英単語を <span class="w"> で包む ── */
  function wrap(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!/[A-Za-z]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest(SKIP_SEL)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const text = n.nodeValue;
      const frag = document.createDocumentFragment();
      let last = 0;
      text.replace(WORD_RE, (m, idx) => {
        if (idx > last) frag.appendChild(document.createTextNode(text.slice(last, idx)));
        const s = document.createElement('span');
        s.className = 'w';
        s.textContent = m;
        frag.appendChild(s);
        last = idx + m.length;
      });
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      n.parentNode.replaceChild(frag, n);
    });
  }

  ROOT_IDS.forEach(id => {
    const root = document.getElementById(id);
    if (!root) return;
    wrap(root);
    const ob = new MutationObserver(() => { ob.disconnect(); wrap(root); observe(); });
    const observe = () => ob.observe(root, { childList: true, subtree: true, characterData: true });
    observe();
  });

  /* ── 意味の検索（長押しした語を含む熟語も探す） ── */
  function phrasesAround(span) {
    if (typeof PHRASE_DICT === 'undefined') return [];
    const block = span.parentElement.closest('button, div, p, li') || span.parentElement;
    const ws = [...block.querySelectorAll('.w')];
    const i = ws.indexOf(span);
    const adjacent = (a, b) => {               // a と b の間が空白だけなら隣どうし
      const r = document.createRange();
      r.setStartAfter(a); r.setEndBefore(b);
      return r.toString().trim() === '';
    };
    const found = [];
    for (let len = 5; len >= 2; len--) {
      for (let st = Math.max(0, i - len + 1); st <= i && st + len <= ws.length; st++) {
        const seq = ws.slice(st, st + len);
        if (!seq.every((w, k) => k === 0 || adjacent(seq[k - 1], w))) continue;
        const key = norm(seq.map(w => w.textContent).join(' '));
        if (PHRASE_DICT[key] && !found.some(f => f.key === key)) found.push({ key, m: PHRASE_DICT[key] });
      }
    }
    return found;
  }

  /* ── ポップアップ ── */
  const pop = document.createElement('div');
  pop.id = 'wpop';
  pop.setAttribute('role', 'tooltip');
  document.body.appendChild(pop);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  function show(span) {
    const raw  = span.textContent;
    const key  = norm(raw);
    const dict = typeof WORD_DICT !== 'undefined' ? WORD_DICT : {};
    const mean = dict[key] || dict[key.replace(/'s$/, '')];
    let html = `<div class="wp-word">${esc(raw)}</div>`;
    html += `<div class="wp-mean">${mean ? esc(mean) : '（辞書に未登録の語です）'}</div>`;
    phrasesAround(span).forEach(p => {
      html += `<div class="wp-phrase"><b>${esc(p.key)}</b>　${esc(p.m)}</div>`;
    });
    pop.innerHTML = html;
    pop.classList.add('show');

    // 単語の上（入らなければ下）に出す。左右は画面内に収める
    const r  = span.getBoundingClientRect();
    const pw = pop.offsetWidth, ph = pop.offsetHeight;
    const vw = document.documentElement.clientWidth;
    let left = r.left + r.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, vw - pw - 8));
    let top = r.top - ph - 10;
    if (top < 8) top = r.bottom + 10;
    pop.style.left = `${left}px`;
    pop.style.top  = `${top}px`;
    span.classList.add('w-on');
  }
  function hide() {
    pop.classList.remove('show');
    document.querySelectorAll('.w.w-on').forEach(w => w.classList.remove('w-on'));
  }

  /* ── 長押し判定 ── */
  let timer = null, startX = 0, startY = 0, suppressClickUntil = 0;

  document.addEventListener('pointerdown', e => {
    const span = e.target.closest && e.target.closest('.w');
    // 意味が出ている間のタップは「閉じる」だけにする（うっかり回答しないように）
    if (pop.classList.contains('show')) {
      hide();
      suppressClickUntil = Date.now() + 800;
      if (!span) { e.stopPropagation(); return; }
    }
    if (!span) return;
    startX = e.clientX; startY = e.clientY;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      show(span);
      suppressClickUntil = Date.now() + 800;    // 長押し後の「タップ扱い」を無効にする
      if (navigator.vibrate) navigator.vibrate(15);
    }, HOLD_MS);
  }, true);

  document.addEventListener('pointermove', e => {
    if (timer && Math.hypot(e.clientX - startX, e.clientY - startY) > 10) { clearTimeout(timer); timer = null; }
  }, true);
  ['pointerup', 'pointercancel'].forEach(t => document.addEventListener(t, () => { clearTimeout(timer); timer = null; }, true));
  window.addEventListener('scroll', () => { clearTimeout(timer); timer = null; hide(); }, true);

  // 長押しで意味を出したときは、選択肢の回答・番号の選択などを発火させない
  document.addEventListener('click', e => {
    if (Date.now() < suppressClickUntil) { e.preventDefault(); e.stopPropagation(); suppressClickUntil = 0; }
  }, true);
  document.addEventListener('contextmenu', e => {
    if (e.target.closest && e.target.closest('.w')) e.preventDefault();
  }, true);
})();
