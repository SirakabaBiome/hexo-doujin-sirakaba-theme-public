# hexo-doujin-sirakaba-theme

　このテーマは同人系個人サイトを運用するためのHexoのテーマです。
　二次創作でも使えますが、一次創作コンテンツ運用を想定しています。

[デモページ](https://lgtg.birchgame.org)
※漫画描かないので漫画ページがないです。なんならイラストページも今用意してません。すみません。

## 最初に

### なぜHexoなのか

　WordpressなどのCMSやHugoなどのSSGがある中、HexoというSSGを選ぶ理由ですが、

- markdownで書ける
  - 上にちゃんと改行が改行として認識される
- pugとsassが使える
- なんだかんだ使いやすい

　の３つです。HugoやWordPress以外にもこういう選択肢があるんだよ～ということを覚えていただけたら幸いです。

## ある機能
- [小説ビューアー対応](https://github.com/amizushiro/NovelViewerTemplate)
  - [夢小説対応](https://yzatelier.web.fc2.com/index.html)もしてます
- [漫画ビューアー対応](https://guardian.bona.jp/st/cv/)
- [いいねボタン対応](https://do.gt-gt.org/product/newiine/)
- Wiki機能
- 簡素な検索機能
- [画像ポップアップ機能](https://biati-digital.github.io/glightbox/)
- 利用規約に同意しないとコンテンツが読めない機能
  - なお、漫画ビューアーに対応させるのは難しかったので除外しています。すみません。いい方法が思いついたら対応します。
- 簡素なテーマ機能

## ない機能
- ブログを彩るアラートボックスなど
- 全文検索機能
- コメント機能
- ページビューカウント機能
- コードブロックのハイライト表示

## 使い方

### お断り
Github、Node.jsなどの知識があり、ターミナルやコンソールの使い方が分かる人を対象としています。
それらがわからない人はとりあえずGithubアカウント作ってissue飛ばしてください。
**Twitterなど各SNSでのお問い合わせは答えません。**
また、一連の操作は全てWindows10環境でVSCodeとターミナルを扱う前提で話を進めます。

### Hexoをインストールします
- [hexo](https://hexo.io/ja/docs/)
- [hexo renderer pug](https://github.com/hexojs/hexo-renderer-pug)
- [hexo renderer sass](https://github.com/knksmith57/hexo-renderer-sass)
が必要です。ないと何も表示されません。

### Hexoサイトを作ります。
[自分で調べてください。](https://hexo.io/ja/docs/setup)

### themesフォルダにこのテーマを入れます。
``` git clone https://github.com/SirakabaBiome/hexo-doujin-sirakaba-theme-public themes/hexo-doujin-sirakaba-theme ```

これが一番早いと思います。

### 必要なファイルをDLしてきます
　使用しているの全部MITライセンスなんで別に同梱してもいいのですが、一応含めていません。

#### 必要なものリスト

- [alice](https://yzatelier.web.fc2.com/alice/)
    4個バージョンを使っています。それ以外だと動きません。
- [GlightBox](https://biati-digital.github.io/glightbox/)
- [JQuery](https://jquery.com/)
- [jquery.cookie](https://github.com/carhartl/jquery-cookie)
- [NovelViewerTemplate](https://github.com/amizushiro/NovelViewerTemplate)
- [Materialize](https://github.com/materializecss/materialize)
    Sassバージョンを使っています。
- [いいねボタン改](https://do.gt-gt.org/product/newiine/)
- [なんかいい感じの漫画ビューア](https://guardian.bona.jp/st/cv/)

### themesのフォルダの中に色々追加します。

ローカル実行では動かないので**いいねボタン改**は入れないでください。
サーバーにアップロードするときに入れます。

#### source/cssフォルダの中
- componentsフォルダ
  materilaizeのやつをフォルダごと移してください。
- comi_style.css
  なんかいいかんじの漫画ビューアーのものです。
- glightbox.min.css
  GlightBoxのやつです。
- materialize.scss
  Materilaizeのやつです。
- snviewer.min.css
  NovelViewerTemplateのやつです。

#### source/jsフォルダの中
- alice.js
  aliceのやつです
- comic.js
  なんかいい感じの漫画ビューアのものです。
- glightbox.min.js
  GlightBoxのやつです。
- jquery[省略].min.js
  バージョンは3.6.0以降であればご自由にどうぞ
- jquery.cookie-1.4.1.min.js
- materialize.min.js
  Materilaizeのやつです。
- snviewer.min.js
  NovelViewerTemplateのやつです。

あとはなんかいい感じの漫画ビューアのimagesフォルダをまるごとsourceフォルダの中に入れてください。
aliceのscript.jsは不要です。入れるとバグります。

最終的にこうなっていればよいです。

- /themes
  - /hexo-doujin-sirakaba-theme
    - /layout
      - 省略
    - /scripts
      - 省略
    - /source
      - /css
        - /components
          - 省略
        - /comi_style.css
        - /glightbox.min.css
        - /hexo-doujin-sirakaba.scss
        - /materialize.scss
        - /snviewer.min.css
      - /images
        - 省略
      - /js
        - /alice.js
        - /comic.js
        - /glightbox.min.js
        - /hexo-doujin-sirakaba.js
        - /jquery-[バージョン].min.js
        - /jquery.cookie-1.4.1.min.js
        - /materialize.min.js
        - /snviewer.min.js
        - /tos.js

### Hexoの_config.ymlを変える

```
[省略]

# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: 自分のサイトのURL
permalink: :year/:month/:day/:title/ # ここを変更
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks

[省略]

# Writing
new_post_name: :year/:month/:day/:title.md # ここを変更
default_layout: post
titlecase: false # Transform title into titlecase
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
syntax_highlighter: highlight.js
highlight:
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  preprocess: true
  line_number: true
  tab_replace: ''

[省略]

# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude: 
- imgs/**/*.png # ここを変更
ignore:

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: hexo-doujin-sirakaba-theme # ここを変更

```

### テーマフォルダのscaffoldsの中身を移す

/あなたのサイト名/themes/hexo-doujin-sirakaba-theme/scaffolds

の中身を

/あなたのサイト名/scaffolds

に移してください。重複ファイルは上書きしてください。

### このテーマの仕様について

#### ディレクトリについて
　このテーマはディレクトリの指定が細かいです。詳しくはそれぞれの機能の項で解説します。

#### 画像形式について
　画像のURLの拡張子がpngのものは全てwebpにURLが変換されます。
　理由はpngに比べてwebpのほうが軽いこと、対応ブラウザが増えたことなどがあります。
　jpgやgifなどは変換されません。ただし、apngはwebpに変換されるので拡張子をpngからapngにすることで回避してください。

　webpの一括変換とかめんどいんだが……？　という人は[昔記事を書いたので](https://devlog.birchgame.org/2023/10/ssg-img-optimize/)これを参考にしてください。

#### このテーマのコンフィグについて
```
language: ja # デフォルトの言語です。

logo: /imgs/logo.webp # デフォルトのロゴです。
ogp: /imgs/ogp.webp # デフォルトのOGPです

warning: このサイトにはライトノベル程度の過激な表現が含まれています。 # ここの注意書きがいろんなところに表示されるようになっています。
no_jump: https://www.google.com/ # 利用規約に同意しなかった場合飛ばされるサイト

# ここに追加するとナビバーなどに表示されます。
# 表示名/リンク
# になるように追加してください。
menu:
  Home: /
  Terms of Service: /tos
  About: /about
  Archives: /archives
  Wiki: /wikis


# Wikiの項目です
# 表示名/リンク
# になるように追加してください。
wiki:
  Characters: /characters
  Words: /words

# aliceの設定です。
yume:
  default_mode: YZ2 # デフォルトのモードを切り替えることができます。想定はYZ1が日本名でYZ2がカタカナ名です。
  default_name:
    - ユーザー名 # names0
    - 名前 # names1
    - ミドルネーム # names2
    - 苗字 # names3
# みたいに４つまで設定できます。詳細はaliceの項目で

# ここから何もなければ変更しないでください。

HeadCDN:
- https://fonts.googleapis.com/icon?family=Material+Icons

stylesheets:
- /.newiine_app/newiine.css
- /css/materialize.css
- /css/snviewer.min.css
- /css/glightbox.min.css
- /css/hexo-doujin-sirakaba.css?Ver=

scripts:
- /js/glightbox.min.js
- /js/jquery-3.7.1.min.js
- /js/jquery.cookie-1.4.1.min.js
- /.newiine_app/newiine.js
- /js/alice.js
- /js/materialize.min.js
- /js/snviewer.min.js
- /js/hexo-doujin-sirakaba.js?Ver=

# ここまで何もなければ変更しないでください。

# いいねボタンの数です。最大４つまでです。アイコンはこちらから探してください。https://fonts.google.com/icons?icon.set=Material+Icons
likebtns:
- favorite_border
- star_border
- thumb_up
- pets

```

#### 簡素な色変え機能について
　root.scssを変更してください。
　色々解説するよりは実際に触ってみたほうが早いと思います。
　わからない場合はコメントがついている部分だけいじってみるだけで大分雰囲気が変わるはずです。

### 記事について

#### 抜粋と本文について

　Hexoでは```<!--more-->```を記事中に一回入れることで```<!--more-->```前を抜粋（page.excerpt）、```<!--more-->```後を本文（page.more）にわけることができます。
　このテーマでは抜粋を説明文に、本文に各種機能を適用しているため、機能を利用する場合はかならず```<!--more-->```を入れてください。

#### Front-matterについて

共通で
```
---
title: ここにタイトル
tags:
  - たぐ
  - だなぁ
categories: カテゴリだなぁ
cover: 作品一覧で使われる画像を指定します。ない場合はnullにするか項目自体を削除してください。
ogp: ogpで使われる画像を指定します。ない場合はnullにするか項目自体を削除してください。
---
```

となっています。
coverとogpは任意です。
categoriesは作品のシリーズ名などをおすすめします。
tagsはSNSのタグなどを意識して使いましょう。キャラクター名を入力すると、wikiにページがあれば自動的に作品の前に表示されるようになっています。


#### OGPについて

OGP画像は

↑優先度高め
記事のOGP
記事のカバー
サイトデフォルトのOGP
サイトデフォルトのロゴ
↓優先度低め

で選ばれるようになっています。

#### 前後ページについて
　全記事中の前後を表示する機能と、同じカテゴリーに属する記事で前後を表示する機能があります。


### 利用規約に同意しないとコンテンツが読めない機能について

　利用する場合は

```hexo new page tos```

　で利用規約ページを作成し、Front-matterのlayoutをtosにして、利用規約を記述してください。

### 小説機能について

```hexo new novel [タイトルをここに入力]```
で記事を作成します。

Front-matterのlayoutがnovelになっていることを確認します。

```<!--more-->```
の後ろに小説本文を入力します。

また、青空文庫形式のルビに対応しています。[この記事](https://qiita.com/8amjp/items/d7c46d9dee0da4d530ef)を参考にしました。ありがとうございます。

#### NovelViewerTemplateについて
　特にいじるところはありません。強いて言うならフォントを変えたい場合は、公式のドキュメントを参考に変えてください。

#### aliceについて

##### 記事について
Front-matterをいじる部分があります。

```
---
[省略]
yumetype: YZ1かYZ2でモードを切り替えます。
yumename:
    - ここに
    - デフォルト名を
    - いれます
---
```

　注意事項として、names0は必ずユーザー名で使われるようになっています。なので、本来は４つですが、３つまでしか変換できないようになっています。それ以上変換したい場合は自力でどうにかするか、意見を募って私に対応させるとかしてください。

##### デフォルトネームについて

alice.jsの中身を変更してください。
また、記事で登場する名前を自動で```<span class="names0"></span>```などに置き換える機能を利用する場合は、scripts/ruby_convert.jsの
```
  var yume_name_default = {
      "YZ1": ["ユーザー名","名字","名前","名無し3"],
      "YZ2": ["ユーザー名","名前","ミドルネーム","苗字"]
  };
```
を変更してください

　注意事項として、デフォルトネームを自動で夢小説に対応させる機能は全ての記事の全ての文字列で行われます。なので、デフォルトネームを一般名詞と被る名前にするのはおすすめしません。
※文字列というのは文字ではなく、String型という意味です。arrayやDictionaryには対応していないという意味です。

### イラスト展示機能について
　難しいことはなにもしてません。
```hexo new illust [ここにタイトル]```
　でページを作成し、layoutがillustであることを確認してください。
　そしたら```<!--more-->```のあとに画像を貼り付けてください。

### 漫画機能について

　結構めんどくさいことをしています。

　まず、```hexo new comic_post [ここにタイトル]```でページを新規作成します。
　そうしたらFront Matterを書きます。


```
---
title: タイトル
tags:
  - ここにタグ
categories: ここにカテゴリ
cover: ここにカバー
ogp: ここにOGP
date: 日付
layout: comic_post
comic_series: ここに漫画シリーズ
---
```

　重要なのはcomic_seriesです。これには日本語を利用しないでください。

　次に、```<!--more-->```の前に作品の説明を書いてください。
　※```<!--more-->```の後ろに何か書いても表示されません。

　次に、```サイトフォルダ/source/comics```フォルダにcomic_seriesと同じ名前のフォルダを追加します。
　例として、comic_seriesが「test」だった場合は```サイトフォルダ/source/comics/test```にします。

　その後、```hexo new comic index```でページを新規作成し、```サイトフォルダ/source/comics/シリーズ名/```の中に、第〇〇話フォルダを作成し、その中に移します。
　※話数では整数以外利用しないでください。14.5話とかは作れません。柔軟性がない代わりに全て自動でリンクされるようになっています。
　例として、comic_seriesが「test」で一話の場合は```サイトフォルダ/source/comics/test/1/index.md```にします。

　次に、index.mdのFront Matterを書きます。

```
---
title: タイトル
date: 日付
layout: comic
comic_setting:
    page: ページ数
    display: 0の場合は左ページ始まり、1の場合は右ページ始まり
---
```

　そうしたら、```サイトフォルダ/source/comics/シリーズ名/話数/```の中に連番にしたwebpファイルを入れます。
　最終的に、comic_seriesがtest、話数が一話でページ数が4枚の場合は

- サイトフォルダ/
  - _posts/
    - comic_postで作った.md
  - source/
    - comics/
      - test/
        - 1/
          - index.md ※名前はindex.md以外にしないでください。
          - 1.webp
          - 2.webp
          - 3.webp
          - 4.webp

としてください。

　最後に、動くことを確認したら終わりです。

　注意事項として、話数ソートは現在日付基準でやっています。もし、日付基準ソートが嫌な場合はissue建ててください。どうにかします。

### wiki機能について

#### お断り

　元々キャラクター一覧しか作る予定が無かったのになんかwiki機能になりました。終わりです。
　その名残であらゆるwikiであるべき場所がcharacterという名前になっています。直すのもめんどくさいのでなおしません。

#### カテゴリー作成

　特に複雑なことはしません。
```hexo new page [カテゴリー名]```
　でカテゴリーを作成します。
　そしたらFront Matterを編集します。


```
---
title: カテゴリ名
date: 日付
layout: character_list
---
```

　最後に```サイトフォルダ/source/```の直下にカテゴリー名のフォルダを半角英数字で作成し、さきほど作成したページをその中に移します。
　例として、カテゴリー名がwordsの場合は

```サイトフォルダ/source/words/index.md```

とします。

##### キャラクター一覧について

```サイトフォルダ/source/charcters/```
の下の場合は特別なレイアウトになります。それ以外は普通の一覧と変わりません。

#### wikiページについて

　まず、
```hexo new character [単語名]```
　で、記事を作成します。

　次に、所属するカテゴリーの中に入れます。例として、charactersカテゴリーに属する場合は```サイトフォルダ/source/charcters/```の中に入れます。階層に関してはカテゴリーのルールさえ守ればご自由にどうぞ。

　次に、本文を編集します。
　特徴として、```<!--more-->```以降に書かれたh2タグとその次のh2タグまでの間は折りたたまれます。例えば、


```
<!--more-->

## これは見出し

これは本文

## これは見出し２

これは本文２

```

とmarkdownファイルがなっている場合は

```
<details>
  <summary>これは見出し</summary>
  <p>これは本文</p>
</details>
<details>
  <summary>これは見出し２</summary>
  <p>これは本文２</p>
</details>
```
となります。

```<!--more-->```
以前に書かれたものは概要となります。

　次に、Front Matterを編集します。

　タイトルは**正式名称フルネーム**をおすすめします。
　理由としては、名前が一致すると自動リンクされたり、タグ名やカテゴリ名で一致すると自動で解説記事として表示される機能があるためです。

```
---
title: タイトル
hiragana: 検索用のひらがな。表示されません。
aka: 二つ名
group: グループ。一覧表示のときに同じグループはまとめられて表示されます。また関連記事として同グループの記事が表示されます。
serif: セリフがある場合はセリフ。不要な場合は削除してください
layout: character # 変えないでください
cover: /imgs/ # 一覧表示のときに表示される画像
stand: /imgs/ # 記事左に表示される画像
ogp: /imgs/ # SNSなどにシェアするときに表示される画像
profile: #後述
  プロフィール:
    種族: 
    性別: 
    身体性: 
    性的嗜好: 
    身長: 
    性格: 
    好きなもの: 
    嫌いなもの: 
    所属組織: 
    職業: 
    出身地: 
    居住地: 
  口調:
    一人称: 
    二人称: 
    口調: 
    サンプルボイス:
battle: # 後述
  戦闘スタイル:
    クラス: 
    メイン属性: 
    サブ属性: 
    攻撃属性: 
    役割: 
  能力値:
    HP: 
    MP: 
    ATK: 
    DEF: 
    CURE: 
related:
  cats:
    - # 関連カテゴリーを表示します。名前だけ入力すれば自動リンクされます
  character: # 後述
refs:
  - 参考資料画像を置けます
enemy_rank: # 後述
  danger: 
  description: 
date: 日付
---
```

　FrontMatterの文を書けるところは全角スペースで区切ると改行できます。

　書き終わったら終わりです。お疲れ様でした。

##### profileについて

　本文前に表示される表を作るメタデータです。

```
profile:
  プロフィール:
    種族: 人間
    性別: 女かも
    身体性: 男かも
    性的嗜好: わかんないかも
    身長: 200mくらいかも
    性格: 温厚かも
    好きなもの: 富士山
    嫌いなもの: 高尾山
    所属組織: 一富士二鷹三茄子
    職業: 山かも
    出身地: 千葉県かも
    居住地: 千葉県かも
```

　だったとしたら、見出しが「プロフィール」になり、それ以降がテーブルになります。

```
<details>
  <summary>プロフィール</summary>
  <table>
    <tbody>
      <tr>
        <th scope="row">種族</th>
        <td><span>人間</span></td>
      </tr>
      <tr>
        <th scope="row">性別</th>
        <td><span>女かも</span></td>
      </tr>
      [省略]
    </tbody>
  </table>
</details>
```

　みたいに出力されます。

profileの次の階層に見出し、見出しの次の階層にラベルとデータというルールさえ守れば無限に増やせますし、減らせます。

##### battleについて

　これもprofileと同様にテーブルを作成するものですが、profileと違うのは本文中の見出しに挿入するということです。

例えば

```
battle: 
  戦闘スタイル:
    クラス: SSR
    メイン属性:  炎
    サブ属性: 水
    攻撃属性: 物理
    役割: ヒーラー
```

　みたいに書いたら、本文中の見出し「戦闘スタイル」の最初に挿入されます。

```
<details>
  <summary>戦闘スタイル</summary>
  <table>
    <tbody>
      <tr>
        <th scope="row">クラス</th>
        <td><span>SSR</span></td>
      </tr>
      <tr>
        <th scope="row">メイン属性</th>
        <td><span>炎</span></td>
      </tr>
      [省略]
    </tbody>
  </table>

  [以降本文]
</details>
```

　それ以外のルールや使用感はprofileと変わりません。

##### enemy_rankについて

　これは自分のサイトの敵キャラクターの難易度について書くために作ったやつです。色もランクも固定ですし、使いにくいですが使える場合はどうぞ。

```
enemy_rank: 
  danger: SS,S,A,B,C,Zの中から選んでください。それ以外の場合は背景色が付きません。
  description: 文が書けます。
```

##### relatedのcharcterについて

```
related:
  cats:
    - # 関連カテゴリーを表示します。名前だけ入力すれば自動リンクされます
  character: # 後述
```

　私のwikiでいつもやっているのが、関連キャラクター表示と同時に関連キャラクターへの感情を書くやつです。
　そのためのやつです。

　使用例は

```
related:
  character: 
    Aさん: Aさんに対する感情
    Bさん: Bさんに対する感情
```

　とすると、Aさんの記事があればAさんのページに自動でリンクされて表になります。ない場合はリンクされません。

##### 親記事・兄弟記事・子記事について

　親記事は同じディレクトリにあるindex.htmlを参照します。
　兄弟記事は同じディレクトリにある記事をindex.htmlいがい全て参照します。
　子記事は存在するディレクトリより一つ下の階層の記事を全て参照します。


##### 出力について

　最後にざっと出力後についてまとめておきます。()はメタデータです。
　※PC版の話です。

　全体的な構成として左にサイドバー、右に記事があります。

　サイドバーには親記事・兄弟記事・子記事があります。

　記事の中身は上下で概要と本文に分かれます。

　概要にはあれば左に立ち絵が表示されます。右には

1. 二つ名(aka)
2. タイトル(titile)
3. セリフ(serif)
4. 抜粋(page.excerpt※メタデータではない)
5. エネミーランク(enemy_rank)

　が表示されます。

　本文には

1. テーブル(profileの子階層分だけ)
2. 本文(battleのラベルと一致するものがあれば中身にテーブルが入れられます)
3. 関連キャラクター(related.character)
4. イラスト設定資料集(refs)
5. 関連作品(あればrelated.catsが挿入されます。)
6. 関連記事(同じgroupの記事。兄弟記事じゃなくても表示されます)

　が表示されます。

### その他

#### パンくずリストについて
　wikiページに付いているパンくずリストはディレクトリパスを表しています。それぞれのディレクトリにindex.htmlがあればそれのタイトルを引っ張ってきます。

#### タグ・カテゴリーについて
　タイトルが一致するwikiの記事があれば、それを関連付けて表示したり、よみがなを引用したりします。

### 全て終わったら

　```hexo g```でhtmlを生成し、サーバーにアップロードしてください。
　また、いいねボタン改を同ディレクトリに```/.newiine-app```としてアップロードしてください。
　なんで.をつけているのかというと、隠しフォルダーにしても動くことと、私がおっちょこちょいなので隠しフォルダーじゃないと間違って削除してしまうからです……

## 免責事項

- すべて自己責任で行ってください。
- 閲覧防止機能も完全なものではありません。
- 質問は必ずgithubのissueで行ってください。その際は過去のissueを検索してからお願いします。

## ライセンス

　テーマ自体はMITライセンスとします。

　テーマ以外の各お借りしているもののライセンス表記は忘れないでください。

## 最後に

　お借りしたスクリプトなどを作成してくださった方全てに感謝しています。
　この場を借りてお礼申し上げます。

## 更新履歴

　2024/05/04 - とりあえずver0.0.1公開