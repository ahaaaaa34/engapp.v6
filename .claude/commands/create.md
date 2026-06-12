# アプリ一括作成スキル

画像を渡すだけで、新しいアプリの作成からGitHub公開・WebアプリURLの報告まで全て自動で行うスキル。

## 手順

1. `$ARGUMENTS` に画像パスが複数あればそれを使う。なければ「画像のパスを全て教えてください」と聞く。

2. `/new` スキルの手順に従ってローカルに作業フォルダを作成する（フォルダ名は自動でtmpworkとする）。

3. 渡された画像を1枚ずつ Read ツールで読み、内容を判定する：
   - FRAME / Exercise A / B / C の問題形式 → `/grammar` スキルの手順で `data.js` に追加
   - 英文・日本語訳が並んでいる長文形式 → `/eigo` スキルの手順で `data.js` と `vocab/data.js` に追加

4. 画像の内容からタイトルを判断して `index.html` と `manifest.json` を書き換える：

   - 文法画像のSTEPラベルや単元名（例：「時制」「助動詞」「仮定法」など）を読み取る
   - `index.html` の以下の箇所を書き換える：
     ```html
     <title>英語[単元名]マスター STEP [n]</title>
     <meta name="apple-mobile-web-app-title" content="[単元名]マスター">
     <h1>英語[単元名]マスター</h1>
     <p>STEP [n]: [単元名] — 大学入試対策</p>
     ```
   - `manifest.json` の `name` と `short_name` も同様に書き換える

5. 全画像の処理が終わったら `.gitignore` を作成する：

   ```
   .env
   .DS_Store
   ```

   その後コミット：
   `git add -A && git commit -m "add: all content from images"`

5. `/publish` スキルの手順に従って GitHub に公開・GitHub Pages を有効化する。

6. 完了したら以下を報告する：
   - 追加した問題数・文数・単語数
   - WebアプリURL: `https://ahaaaaa34.github.io/engapp.v[n]/`
