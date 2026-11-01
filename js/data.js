// data.js — 高2 2学期第2回テスト（UNLOCK 読解 ＋ POWER FRAME）
// 大問1〜3：本文と設問・解答はテストどおり。訳・解説は本文の該当箇所をもとに作成。
// 大問4〜6：問題・解答はテストどおり。訳・解説はパワーフレイムの解答・解説書（記号はテストの並びに合わせた）。

const TEST_INFO = { title: '高2 2学期第2回テスト', sub: 'UNLOCK 読解（肥満対策：広告規制か学校教育か） ／ POWER FRAME' };

const PASSAGES = { unlock: {
  "heading": "UNLOCK",
  "title": [
    {
      "en": "Should the fight against obesity focus on food advertising or school education?",
      "ja": "肥満との闘いは，食品広告と学校教育のどちらに重点を置くべきか。"
    },
    {
      "en": "Discuss both sides of the argument and give your opinion.",
      "ja": "議論の両面を論じ，自分の意見を述べなさい。"
    }
  ],
  "paras": [
    [
      {
        "en": "The number of people with obesity has increased a lot around the world in recent decades.",
        "ja": "肥満の人の数は，ここ数十年で世界中で大きく増えた。"
      },
      {
        "en": "In the past, this health concern was mainly seen in rich countries, but now it is also growing rapidly in poorer nations.",
        "ja": "かつてこの健康問題は主に裕福な国々で見られたが，今では貧しい国々でも急速に増えている。"
      },
      {
        "en": "Eating unhealthy food and not exercising enough are widely recognized as the primary reasons for this problem.",
        "ja": "不健康な食べ物を食べることと，十分に運動しないことが，この問題の主な原因として広く認められている。"
      },
      {
        "en": "However, experts have different ideas about how to deal with this issue.",
        "ja": "しかし，この問題にどう対処するかについては，専門家の間でも考えが分かれている。"
      },
      {
        "en": "Some people think that limiting food advertisements is the best way to solve it, while others believe that improving health education in schools is a more effective approach.",
        "ja": "食品広告を制限することが最善の解決策だと考える人もいれば，学校での健康教育を改善するほうが効果的な方法だと考える人もいる。"
      }
    ],
    [
      {
        "en": "On the one hand, people who support limiting advertisements say that food marketing has a strong influence on what people choose to eat every day.",
        "ja": "一方で，広告の制限を支持する人々は，食品のマーケティングは人々が毎日何を食べるかに強い影響を与えていると言う。"
      },
      {
        "en": "Children and young adults see hundreds of ads for sugary drinks, fast food, and packaged snacks on TV and social media.",
        "ja": "子どもや若者は，テレビやソーシャルメディアで，砂糖入りの飲み物やファストフード，袋入りのお菓子の広告を何百も目にしている。"
      },
      {
        "en": "These ads use bright colors, popular characters, and fun words to make unhealthy food look very attractive.",
        "ja": "これらの広告は，明るい色や人気のキャラクター，楽しい言葉を使って，不健康な食べ物をとても魅力的に見せている。"
      },
      {
        "en": "Research shows that seeing these commercials directly increases people's desire to buy and eat junk food.",
        "ja": "研究によれば，こうしたコマーシャルを見ると，ジャンクフードを買って食べたいという人々の欲求が直接高まる。"
      },
      {
        "en": "Therefore, stopping or controlling ads for unhealthy food—especially during times when children are watching—could significantly help lower the demand for these products.",
        "ja": "したがって，不健康な食べ物の広告を――特に子どもが見ている時間帯に――止めたり規制したりすれば，こうした商品の需要を大きく下げる助けになりうる。"
      }
    ],
    [
      {
        "en": "On the other hand, many people argue that school education plays a more important role in solving the obesity problem long-term.",
        "ja": "他方で，多くの人々は，肥満の問題を長期的に解決するうえでは学校教育のほうが重要な役割を果たすと主張する。"
      },
      {
        "en": "They point out that simply removing ads does not teach young people how to choose a healthy diet.",
        "ja": "彼らは，広告をなくすだけでは，若者に健康的な食事の選び方を教えることにはならないと指摘する。"
      },
      {
        "en": "In school, through cooking and nutrition classes, students can learn how to plan balanced meals and understand daily calorie needs.",
        "ja": "学校では，料理や栄養の授業を通して，生徒はバランスのとれた食事の組み立て方を学び，1日に必要なカロリーを理解することができる。"
      },
      {
        "en": "Also, schools can offer daily physical education and create fun sports events to encourage students to stay active.",
        "ja": "また，学校は毎日体育の授業を行い，楽しいスポーツ行事を企画して，生徒が活動的でいられるよう促すこともできる。"
      },
      {
        "en": "Supporters of this idea believe that building good lifestyle habits at school helps students stay healthy for their whole lives.",
        "ja": "この考えを支持する人々は，学校でよい生活習慣を身につけることが，生徒が一生健康でいる助けになると考えている。"
      }
    ],
    [
      {
        "en": "In conclusion, both ad control and school education offer important ways to deal with obesity.",
        "ja": "結論として，広告の規制と学校教育はどちらも，肥満に対処するための重要な方法となる。"
      },
      {
        "en": "In my opinion, we need to use both strategies together.",
        "ja": "私の意見では，両方の戦略を一緒に用いる必要がある。"
      },
      {
        "en": "Limiting ads can quickly reduce how often young people see junk food, while school education gives them the essential knowledge to make healthy choices on their own.",
        "ja": "広告を制限すれば，若者がジャンクフードを目にする頻度をすぐに減らすことができ，一方で学校教育は，彼らが自分で健康的な選択をするために欠かせない知識を与えてくれる。"
      },
      {
        "en": "Using both methods together will create the strongest defense against rising obesity rates worldwide.",
        "ja": "両方の方法を一緒に用いることで，世界中で上昇し続ける肥満率に対する最も強力な防御策が生まれるだろう。"
      }
    ]
  ]
} };

const SECTIONS = [
  {
    "key": "q1",
    "name": "大問1　内容一致",
    "sub": "本文（UNLOCK）の内容に合うものを選ぶ",
    "tag": "読解",
    "points": "各2点"
  },
  {
    "key": "q2",
    "name": "大問2　英問英答",
    "sub": "本文をもとに英語で答える（自己採点）",
    "tag": "記述",
    "points": "各2点"
  },
  {
    "key": "q3",
    "name": "大問3　語句補充",
    "sub": "ボックスから最も適切な語句を選ぶ",
    "tag": "語彙",
    "points": "各1点"
  },
  {
    "key": "q4",
    "name": "大問4　POWER FRAME",
    "sub": "空所に入れるのに最も適切な語(句)を選ぶ",
    "tag": "選択",
    "points": "各1点"
  },
  {
    "key": "q5",
    "name": "大問5　誤文訂正",
    "sub": "誤りの番号を指摘し，正しく直す",
    "tag": "誤文",
    "points": "各完答1点"
  },
  {
    "key": "q6",
    "name": "大問6　整序英作文",
    "sub": "( )内の語(句)を並べかえる",
    "tag": "整序",
    "points": "各1点"
  }
];

const QUIZ_DATA = {
  "q1": [
    {
      "id": "t1-1",
      "section": "q1",
      "sectionName": "大問1",
      "label": "大問1 (1)",
      "tagClass": "tag-a",
      "type": "choice",
      "passage": "unlock",
      "labels": [
        "a",
        "b",
        "c"
      ],
      "question": "What does the passage say about the global obesity issue?",
      "options": [
        "It is becoming a smaller problem in rich countries because people exercise more.",
        "It is now growing rapidly in poorer nations as well as in rich ones.",
        "Experts all agree that changing school education is the way to solve it."
      ],
      "answer": 1,
      "translation": "本文は世界の肥満問題について何と述べているか。― b. 今では裕福な国々だけでなく，貧しい国々でも急速に増えている。",
      "explanation": "【本文の根拠】第1段落 In the past, this health concern was mainly seen in rich countries, but now it is also growing rapidly in poorer nations.（かつては主に裕福な国々で見られたが，今では貧しい国々でも急速に増えている）。a「人々がより運動するので裕福な国では問題が小さくなっている」は本文にない。c「専門家は全員，学校教育を変えるのが解決法だと意見が一致している」は experts have different ideas（専門家の考えは分かれている）と矛盾する。"
    },
    {
      "id": "t1-2",
      "section": "q1",
      "sectionName": "大問1",
      "label": "大問1 (2)",
      "tagClass": "tag-a",
      "type": "choice",
      "passage": "unlock",
      "labels": [
        "a",
        "b",
        "c"
      ],
      "question": "Why do supporters want to limit food advertisements?",
      "options": [
        "Ads make unhealthy food look attractive and directly increase people's desire to buy it.",
        "Ads for sugary drinks teach young people how to choose nutritious food on social media.",
        "TV commercials encourage companies to lower the prices of junk food for children."
      ],
      "answer": 0,
      "translation": "支持者たちはなぜ食品広告を制限したいのか。― a. 広告は不健康な食べ物を魅力的に見せ，それを買いたいという人々の欲求を直接高めるから。",
      "explanation": "【本文の根拠】第2段落 These ads use bright colors, popular characters, and fun words to make unhealthy food look very attractive. Research shows that seeing these commercials directly increases people's desire to buy and eat junk food. b「砂糖入り飲料の広告が栄養のある食べ物の選び方を教える」，c「テレビCMが企業にジャンクフードの値下げを促す」はどちらも本文にない。"
    },
    {
      "id": "t1-3",
      "section": "q1",
      "sectionName": "大問1",
      "label": "大問1 (3)",
      "tagClass": "tag-a",
      "type": "choice",
      "passage": "unlock",
      "labels": [
        "a",
        "b",
        "c"
      ],
      "question": "What advantage does school education have over ad restrictions?",
      "options": [
        "It stops fast-food companies from advertising on TV during children's viewing hours.",
        "It gives students practical knowledge and habits needed to make healthy choices for life.",
        "It guarantees that students will not eat packaged snacks when they are at home."
      ],
      "answer": 1,
      "translation": "学校教育には広告規制と比べてどんな利点があるか。― b. 生徒に，一生健康的な選択をするのに必要な実践的な知識と習慣を与える。",
      "explanation": "【本文の根拠】第3段落 simply removing ads does not teach young people how to choose a healthy diet（広告をなくすだけでは健康的な食事の選び方は教えられない）／building good lifestyle habits at school helps students stay healthy for their whole lives（学校でよい生活習慣を身につけると一生健康でいられる）。a は広告規制側の内容。c「家で袋入りのお菓子を食べないことを保証する」は本文にない。"
    },
    {
      "id": "t1-4",
      "section": "q1",
      "sectionName": "大問1",
      "label": "大問1 (4)",
      "tagClass": "tag-a",
      "type": "choice",
      "passage": "unlock",
      "labels": [
        "a",
        "b",
        "c"
      ],
      "question": "What do the two arguments have in common?",
      "options": [
        "Both focus on ways to help young people build healthier eating and lifestyle habits.",
        "Both claim that individual effort is enough to solve the obesity problem.",
        "Both suggest that we should show more food advertisements in schools."
      ],
      "answer": 0,
      "translation": "2つの主張に共通しているのは何か。― a. どちらも，若者がより健康的な食習慣や生活習慣を身につけるのを助ける方法に焦点を当てている。",
      "explanation": "【本文の根拠】広告規制派（第2段落）は子どもや若者がジャンクフードを欲しがらないようにすることを，学校教育派（第3段落）は生徒が健康的な食事・運動の習慣を身につけることを目指しており，どちらも若者の健康的な習慣づくりが目的。b「個人の努力で十分」はどちらも述べていない。c「学校でもっと食品広告を見せるべき」は広告規制派と正反対。"
    },
    {
      "id": "t1-5",
      "section": "q1",
      "sectionName": "大問1",
      "label": "大問1 (5)",
      "tagClass": "tag-a",
      "type": "choice",
      "passage": "unlock",
      "labels": [
        "a",
        "b",
        "c"
      ],
      "question": "What is the main message of the passage?",
      "options": [
        "Controlling food ads is much more important than teaching about health in schools.",
        "School education is a more reliable tool to help young people stay healthy.",
        "Combining ad restrictions with school education is the most effective strategy to fight obesity."
      ],
      "answer": 2,
      "translation": "本文の主旨は何か。― c. 広告の規制と学校教育を組み合わせることが，肥満と闘う最も効果的な戦略である。",
      "explanation": "【本文の根拠】第4段落 In my opinion, we need to use both strategies together.／Using both methods together will create the strongest defense against rising obesity rates worldwide. a は広告規制だけ，b は学校教育だけを重視しており，「両方を一緒に」という筆者の意見に合わない。"
    }
  ],
  "q2": [
    {
      "id": "t2-1",
      "section": "q2",
      "sectionName": "大問2",
      "label": "大問2 (1)",
      "tagClass": "tag-c",
      "type": "write",
      "passage": "unlock",
      "question": "What features are used in advertisements to make unhealthy food look appealing to young people?",
      "answer": "They use bright colors, popular characters, and fun words.",
      "translation": "若者に不健康な食べ物を魅力的に見せるために，広告ではどんな特徴が使われているか。― 明るい色，人気のキャラクター，楽しい言葉を使っている。",
      "explanation": "【本文の根拠】第2段落 These ads use bright colors, popular characters, and fun words to make unhealthy food look very attractive. 主語は These ads → They に置きかえ，to make 以下は質問文と重なるので省いてよい。"
    },
    {
      "id": "t2-2",
      "section": "q2",
      "sectionName": "大問2",
      "label": "大問2 (2)",
      "tagClass": "tag-c",
      "type": "write",
      "passage": "unlock",
      "question": "What activities can schools organize to help students stay active?",
      "answer": "They can offer daily physical education and create fun sports events.",
      "translation": "生徒が活動的でいられるよう，学校はどんな活動を企画できるか。― 毎日体育の授業を行い，楽しいスポーツ行事を企画できる。",
      "explanation": "【本文の根拠】第3段落 Also, schools can offer daily physical education and create fun sports events to encourage students to stay active. 主語の schools → They に置きかえて答える。"
    }
  ],
  "q3": [
    {
      "id": "t3-1",
      "section": "q3",
      "sectionName": "大問3",
      "label": "大問3 (1)",
      "tagClass": "tag-b",
      "type": "choice",
      "options": [
        "balanced diet",
        "campaign",
        "junk food",
        "nutritional",
        "obesity",
        "portion"
      ],
      "answer": 0,
      "note": "［ボックス］balanced diet / campaign / junk food / nutritional / obesity / portion（2つは使わない）",
      "question": "Eating a ( ) is essential for students because it provides all the necessary nutrients for growth and study.",
      "translation": "バランスのとれた食事をとることは，成長と勉強に必要なすべての栄養素を与えてくれるので，生徒にとって欠かせない。",
      "explanation": "冠詞 a のあとに入り，「必要な栄養素をすべて与えてくれる」ものなので balanced diet「バランスのとれた食事」。"
    },
    {
      "id": "t3-2",
      "section": "q3",
      "sectionName": "大問3",
      "label": "大問3 (2)",
      "tagClass": "tag-b",
      "type": "choice",
      "options": [
        "balanced diet",
        "campaign",
        "junk food",
        "nutritional",
        "obesity",
        "portion"
      ],
      "answer": 2,
      "note": "［ボックス］balanced diet / campaign / junk food / nutritional / obesity / portion（2つは使わない）",
      "question": "Many experts warn that regularly drinking high-sugar sodas and eating ( ) can lead to long-term health problems.",
      "translation": "多くの専門家は，砂糖の多い炭酸飲料を日常的に飲み，ジャンクフードを食べることは，長期的な健康問題につながりうると警告している。",
      "explanation": "eating の目的語になる「食べ物」で，健康問題の原因になるものなので junk food「ジャンクフード」。"
    },
    {
      "id": "t3-3",
      "section": "q3",
      "sectionName": "大問3",
      "label": "大問3 (3)",
      "tagClass": "tag-b",
      "type": "choice",
      "options": [
        "balanced diet",
        "campaign",
        "junk food",
        "nutritional",
        "obesity",
        "portion"
      ],
      "answer": 3,
      "note": "［ボックス］balanced diet / campaign / junk food / nutritional / obesity / portion（2つは使わない）",
      "question": "Food companies are now required to display clear ( ) information on their packages so that consumers know what they are eating.",
      "translation": "食品会社は現在，消費者が何を食べているのかわかるように，パッケージに明確な栄養成分の情報を表示することを求められている。",
      "explanation": "名詞 information を修飾する形容詞が入るので nutritional「栄養の」。nutritional information で「栄養成分表示」。"
    },
    {
      "id": "t3-4",
      "section": "q3",
      "sectionName": "大問3",
      "label": "大問3 (4)",
      "tagClass": "tag-b",
      "type": "choice",
      "options": [
        "balanced diet",
        "campaign",
        "junk food",
        "nutritional",
        "obesity",
        "portion"
      ],
      "answer": 5,
      "note": "［ボックス］balanced diet / campaign / junk food / nutritional / obesity / portion（2つは使わない）",
      "question": "To prevent overeating, doctors suggest reducing the size of your meal ( ) at dinner time.",
      "translation": "食べすぎを防ぐために，医師は夕食時の1食分の量を減らすことを勧めている。",
      "explanation": "meal portion で「1食分の量」。the size of your meal portion で「1食分の量の大きさ」となる。使わない2語は campaign「運動，キャンペーン」と obesity「肥満」。"
    }
  ],
  "q4": [
    {
      "id": "t4-1",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (1)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "was shocked",
        "was shocking",
        "has shocked",
        "shocked"
      ],
      "answer": 1,
      "source": "パワーフレイム STEP 13 Ex.A 06",
      "question": "It ( ) for Mary to learn that her bike had been stolen.",
      "translation": "自分の自転車が盗まれていたことを知るのは，メアリーにとってショックだった。",
      "explanation": "Itは形式主語で，真主語to learn以下の内容を指す。形容詞shockingは「(物事が)衝撃的な」，shockedは「(人が)衝撃を受けた」という意味を表すので，イwas shockingを選ぶ。動詞shockは「(人)に衝撃を与える」という意味の他動詞なので，ウhas shockedやエshockedは不可。"
    },
    {
      "id": "t4-2",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (2)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "many",
        "large",
        "much",
        "more"
      ],
      "answer": 1,
      "source": "パワーフレイム FRAME 117",
      "question": "Do you know how ( ) the population of this city is?",
      "translation": "この都市の人口はどのくらいの多さか知っていますか。",
      "explanation": "population「人口」の「多い⇔少ない」はlarge↔smallで表すので，イlargeを選ぶ。"
    },
    {
      "id": "t4-3",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (3)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "launching",
        "to launch",
        "launched",
        "launch"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 13 Ex.A 19",
      "question": "Is that project worth ( ) at a great expense to the taxpayer?",
      "translation": "そのプロジェクトは納税者に多大な負担をかけてまで着手する価値があるのですか。",
      "explanation": "S is worth doingで「Sは…する価値がある」という意味になるので，アlaunchingを選ぶ。"
    },
    {
      "id": "t4-4",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (4)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "little",
        "number",
        "few",
        "big"
      ],
      "answer": 2,
      "source": "パワーフレイム FRAME 112",
      "question": "There were ( ) people at the meeting, so the room was nearly empty.",
      "translation": "その会議に人はほとんどいなかったので，部屋はほぼがら空きだった。",
      "explanation": "あとに続くpeopleは複数扱いをする数えられる名詞なので，数えられる名詞を修飾するウfew「(数が)ほとんど…ない」を選ぶ。"
    },
    {
      "id": "t4-5",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (5)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "graduate from",
        "graduate of",
        "graduate",
        "graduate at"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 08 Ex.A 04",
      "question": "When did you ( ) that university?",
      "translation": "あなたはあの大学をいつ卒業したのですか。",
      "explanation": "graduateは自動詞であり，graduate from ～の形で「～を卒業する」という意味を表すので，アgraduate fromを選ぶ。"
    },
    {
      "id": "t4-6",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (6)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "safely",
        "dangerously",
        "in safety",
        "safe"
      ],
      "answer": 3,
      "source": "パワーフレイム STEP 08 Ex.A 01",
      "question": "Don't climb up that ladder! It doesn't look ( ).",
      "translation": "そのはしごを上がってはだめだ！ 安全なようには見えない。",
      "explanation": "lookは形容詞を補語にとり「…に見える」という意味を表すので，エsafeを選ぶ。"
    },
    {
      "id": "t4-7",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (7)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "raise",
        "stand",
        "heighten",
        "rise"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 08 Ex.A 19",
      "question": "Because of the noise, Tom had to ( ) his voice to be heard.",
      "translation": "騒音のせいで，トムは自分の言うことを聞いてもらうために声を張り上げねばならなかった。",
      "explanation": "空所の直後にhis voiceという目的語が続いているので，他動詞が入る。「(声など)を張り上げる」という意味を持つ他動詞アraiseを選ぶ。"
    },
    {
      "id": "t4-8",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (8)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "lately",
        "fast",
        "faster",
        "at late"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 13 Ex.A 27",
      "question": "Has Mark been here ( )? I haven't seen him around.",
      "translation": "マークは最近ここに来たかい？ 彼を見かけないのだけど。",
      "explanation": "文の内容より，「最近」という意味を表す副詞アlatelyを選ぶ。イfast「速く」，ウfaster「より速く」は，文の内容に合わないので不可。"
    },
    {
      "id": "t4-9",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (9)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "unable",
        "incapable",
        "enable",
        "impossible"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 13 Ex.A 15",
      "question": "I'm terribly sorry, but I'm ( ) to help you in any way.",
      "translation": "本当に申し訳ありませんが，どうしてもあなたを助けることができません。",
      "explanation": "直後のto helpに着目する。be unable to doで「…することができない」という意味を表すので，アunableを選ぶ。エimpossibleは人を主語にとることができないので不可。イincapableはbe incapable of doingの形で「…することができない」を表すので不可。"
    },
    {
      "id": "t4-10",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (10)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "marrying",
        "marry",
        "married",
        "marriage"
      ],
      "answer": 2,
      "source": "パワーフレイム STEP 08 Ex.A 03",
      "question": "Kevin and Julie got ( ) in Hawaii.",
      "translation": "ケビンとジュリーはハワイで結婚した。",
      "explanation": "marryはbe[get] married (to ～)の形で「(～と)結婚する」という意味を表すので，ウmarriedを選ぶ。"
    },
    {
      "id": "t4-11",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (11)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "tell",
        "say",
        "explain",
        "speak"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 08 Ex.A 11",
      "question": "Would you please ( ) me where the subway station is?",
      "translation": "地下鉄の駅がどこか私に教えていただけませんか。",
      "explanation": "空所のあとにmeとwhereが導く節という2つの目的語が続いていることに着目する。tell A Bで「AにBを話す」の意味を表すので，アtellを選ぶ。"
    },
    {
      "id": "t4-12",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (12)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "lay",
        "laid",
        "lied",
        "had lain"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 08 Ex.A 08",
      "question": "He was so worn out that he just ( ) down and slept.",
      "translation": "彼はすっかり疲れ切っていたので，ただもう横になって眠った。",
      "explanation": "lie downで「横たわる」という意味を表すので，自動詞lieの過去形アlayを選ぶ。"
    },
    {
      "id": "t4-13",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (13)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "sensitive",
        "impressive",
        "sensible",
        "impressed"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 13 Ex.A 13",
      "question": "She is so ( ) that she cried for days when her pet rabbit died.",
      "translation": "彼女はとても傷つきやすいので，ペットのウサギが死んだときには何日も泣いた。",
      "explanation": "文の内容より，アsensitive「傷つきやすい」を選ぶ。エimpressed「感動した」，イimpressive「印象的な／すばらしい」，ウsensible「分別のある／賢明な」は文の内容に合わないので不可。"
    },
    {
      "id": "t4-14",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (14)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "the point to us",
        "about the point",
        "the point us",
        "us the point"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 08 FRAME 066",
      "question": "Will you please explain ( ) once again?",
      "translation": "もう1度要点を私たちに説明してくださいませんか。",
      "explanation": "explain A to Bで「AのことをBに説明する」という意味になるので，アthe point to usを選ぶ。explainの直後に〈人〉はこないことに注意。"
    },
    {
      "id": "t4-15",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (15)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "almost",
        "more",
        "most",
        "mostly"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 13 Ex.A 23",
      "question": "I was ( ) involved in a car accident. I narrowly escaped being run over.",
      "translation": "私はもう少しで自動車事故に巻き込まれるところだった。ひかれるのをかろうじて免れた。",
      "explanation": "was involvedを修飾するので，「ほとんど／もう少しで」という意味を表す副詞アalmostを選ぶ。エmostly「たいていは」，ウmost「最も」，イmore「さらに」は，文の内容に合わないので不可。"
    },
    {
      "id": "t4-16",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (16)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "discourage",
        "relieve",
        "observe",
        "recall"
      ],
      "answer": 0,
      "source": "パワーフレイム STEP 08 Ex.A 16",
      "question": "My parents are trying to ( ) me from moving to London, but I'm planning to go anyway.",
      "translation": "私の両親は私がロンドンに移り住むのを思いとどまらせようとしているが，私はそれでもやはり行くつもりだ。",
      "explanation": "discourage O from doingで「Oが…するのを思いとどまらせる」という意味を表すので，アdiscourageを選ぶ。エrecall，ウobserve，イrelieveはこの形をとらないので不可。"
    },
    {
      "id": "t4-17",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (17)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "said",
        "talked about",
        "spoke",
        "told to"
      ],
      "answer": 1,
      "source": "パワーフレイム STEP 08 Ex.A 13",
      "question": "Jennifer ( ) her own work experience in India.",
      "translation": "ジェニファーは自分のインドでの仕事の経験について話した。",
      "explanation": "空所のあとにher own work experience in Indiaという目的語が続いていることに着目。talk about ～で「～について話す」という意味になるので，イtalked aboutを選ぶ。"
    },
    {
      "id": "t4-18",
      "section": "q4",
      "sectionName": "大問4",
      "label": "大問4 (18)",
      "tagClass": "tag-f",
      "type": "choice",
      "labels": [
        "ア",
        "イ",
        "ウ",
        "エ"
      ],
      "options": [
        "be",
        "do",
        "help",
        "have"
      ],
      "answer": 1,
      "source": "パワーフレイム STEP 08 FRAME 068",
      "question": "Drinking and smoking will ( ) you great harm.",
      "translation": "飲酒と喫煙はあなたに多大な害を及ぼすだろう。",
      "explanation": "do O harmで「Oに害を及ぼす」という意味を表すので，イdoを選ぶ。"
    }
  ],
  "q5": [
    {
      "id": "t5-1",
      "section": "q5",
      "sectionName": "大問5",
      "label": "大問5 (1)",
      "tagClass": "tag-b",
      "type": "exB",
      "question": "When we visited ①her office for a regular check-up, Dr. Dixon told my mom ②to go to the hospital ③to have her stomach ④examine.",
      "options": [
        "①",
        "②",
        "③",
        "④"
      ],
      "answer": 3,
      "spans": [
        "her office",
        "to go",
        "to have",
        "examine"
      ],
      "correction": "④ examine → examined",
      "corrected": "When we visited her office for a regular check-up, Dr. Dixon told my mom to go to the hospital to have her stomach examined.",
      "translation": "私たちが定期検診のために診療所を訪れたとき，ディクソン先生は私の母に，胃を検査してもらうために病院へ行くようにと言った。",
      "explanation": "haveは使役動詞。〈have＋O＋done〉で「Oを…してもらう，される」という意味を表すので，④examineはexaminedにする。",
      "source": "パワーフレイム STEP 08 Ex.B 04"
    },
    {
      "id": "t5-2",
      "section": "q5",
      "sectionName": "大問5",
      "label": "大問5 (2)",
      "tagClass": "tag-b",
      "type": "exB",
      "question": "If I ①am accepted by this college, I ②will ③definitely study ④hardly.",
      "options": [
        "①",
        "②",
        "③",
        "④"
      ],
      "answer": 3,
      "spans": [
        "am accepted",
        "will",
        "definitely",
        "hardly"
      ],
      "correction": "④ hardly → hard",
      "corrected": "If I am accepted by this college, I will definitely study hard.",
      "translation": "もし私がこの大学に受け入れられたら，絶対に一生懸命勉強する。",
      "explanation": "④hardlyは「ほとんど…ない」という意味を表す副詞なので，「熱心に」という意味を表す副詞hardにする。",
      "source": "パワーフレイム STEP 13 Ex.B 03"
    }
  ],
  "q6": [
    {
      "id": "t6-1",
      "section": "q6",
      "sectionName": "大問6",
      "label": "大問6 (1)",
      "tagClass": "tag-c",
      "type": "exC",
      "japanese": "都合がよければ，火曜日の11時に来てください。",
      "prefix": "Please come at 11 o'clock on Tuesday",
      "suffix": ".",
      "words": [
        "it",
        "for",
        "you",
        "convenient",
        "if",
        "is"
      ],
      "note": null,
      "answer": "Please come at 11 o'clock on Tuesday if it is convenient for you.",
      "explanation": "convenient「都合のよい」は人を主語にすることができない。「(人)にとって都合がよい」というときはconvenient for＋人で表すので，if it is convenient for youとする。",
      "source": "パワーフレイム STEP 13 Ex.C 01"
    },
    {
      "id": "t6-2",
      "section": "q6",
      "sectionName": "大問6",
      "label": "大問6 (2)",
      "tagClass": "tag-c",
      "type": "exC",
      "japanese": "その国には小学校のない村はほとんどない。",
      "prefix": "In the country there is",
      "suffix": "school.",
      "words": [
        "without",
        "elementary",
        "hardly",
        "any",
        "its",
        "village"
      ],
      "note": null,
      "answer": "In the country there is hardly any village without its elementary school.",
      "explanation": "「ほとんど～がない」はhardly any ～で表すので，まずthere is hardly any villageとし，villageを修飾するwithout its elementary schoolをこのあとに続ける。",
      "source": "パワーフレイム STEP 13 Ex.C 03"
    }
  ]
};

const EIGO_SENTENCES = [];

/* ── 丸をつけた問題（チェックしたら id を追加する） ── */
const MARKED_SET = {
  name: '丸をつけた問題',
  sub: '要復習の問題',
  ids: []
};
