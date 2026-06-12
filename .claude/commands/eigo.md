# 英コミュ長文データ更新スキル

画像から英文・日本語訳・文法解説を抽出して追加するスキル。

## 手順

1. まず現在のプロジェクトにある以下のファイルを読んで形式を把握する：
   - `data.js`（EIGO_SENTENCES の形式・末尾を確認）
   - `vocab/data.js`（WORDS の形式・最後のIDを確認）

2. `$ARGUMENTS` に画像パスがあれば Read ツールで読む。なければ「画像のパスを教えてください」と聞く。

3. 画像から以下を1文ずつ抽出する：
   - 英文（**画像に書かれている文字を一字一句そのまま転写する。スペル・大文字小文字・句読点も変えない。絶対に書き換えや補正をしない。**）
   - 日本語訳（画像にあればそのまま、なければ翻訳する）
   - 文法・構造の解説（画像にあればそのまま、なければ文の構造を簡潔に説明）

4. 手順1で確認した EIGO_SENTENCES の形式に合わせて `data.js` の末尾に追加する。

5. 全英文から語彙を **2段階** で抽出して `vocab/data.js` の WORDS 末尾に追加する：

   **【第1段階：全単語を洗い出す】**
   全文から登場する単語・熟語を品詞を問わず全てリストアップする。
   この段階では絞り込まず、とにかく全て出す。
   ただし以下は除外：
   - be動詞（is/are/was/were/be/been/being）
   - 冠詞・前置詞・接続詞・代名詞（a/the/in/on/of/and/but/to/for/it/they/we/this/that等）
   - 数字・固有名詞

   **【第2段階：英検3級以上に絞り込む】**
   第1段階のリストから、英検レベルが3級以上の語彙のみを残す。
   - 3級（中学応用語）：endanger, protect, destroy など
   - 準2級（高校基本語）：extinct, pollution, habitat など
   - 2級（高校発展語）：sanctuary, penalty, cooperate など
   - 準1級以上（大学入試レベル）：overfishing, exfiltrate など

   すでに vocab/data.js にある単語は追加しない。
   各単語に `example` として使われている英文（EIGO_SENTENCESの該当文）を入れる。

6. `git add data.js vocab/data.js && git commit -m "eigo: add sentences and words"`

7. 何文・何単語追加したか報告する。
