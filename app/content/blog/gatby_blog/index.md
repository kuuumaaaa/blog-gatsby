---
title: Gatsbyを使ったブログ作成
date: "2021-10-24"
tags: ["gatsby"]
hero: ./gatsby-logo.svg
description: "create blog by gatsby"
---

## はじめに
Reactのフレームワークの一つであるGatsbyを使って、ブログを作成してみました。
フロントエンド周りなど色々勉強になったのでブログのデプロイ方法など紹介したいと思います。
## gatsby
gatsbyはreactをベースとしたフレームワークの静的サイトジェネレータ(SPA)です。
静的サイトジェネレータは、一度ソースコードをコンパイルする際に、GraphQL等からデータを必要なデータを引っ張っりHTMLを作成してくれるため、そのあとにDB等にアクセスする必要がありません。
これらを踏まえたgatsbyのメリットは以下でこのメリットからgatsbyを使用しました。
- pluginやthemes,starterが充実していること
  - 簡単に機能拡張できそう。starterを使えば0からのスタートではないので、躓くことが少なそう。
- Gitで簡単にブログ更新できる
  - SPAであるため、gitへpushした後にCI/CD環境でビルドしNetlifyを使いホスティングすれば簡単にデプロイできる。
- 爆速
  - 色々プラグイン入れているけど爆速。天才。

それでは、ブログ作成方法など紹介！
## starter
gatsbyは様々なstarterを出しているので、そのstarterをちょっといじるだけでちょっとしたものだったらすぐできる。
今回使用するstarterは[gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog)を使用。
理由としては、下記の3つ。
- 色々カスタマイズしたかった
- ブログ作成を始めた当初こんなに色々starterがあるのを知らなかった
- 参考にしたサイトで使用していることが多かった

下記コマンド一発でこちらのようなサイトが作れる。すごい。
```
npx gatsby new gatsby-starter-blog https://github.com/gatsbyjs/gatsby-starter-blog
```
ちなみに、ビルドして実行するコマンドはこちら。こちらのコマンドを実行後にlocalhost:8000に接続すれば、ブログ作れる。
```
gatby develop
```
[今回のコマンドで作れるサイト](https://gatsbystarterblogsource.gatsbyjs.io/)


## CSSフレームワーク
今回はもう一つフレームワークを使用しています。
それはTailWind CSSです。
TailWindはあらかじめ、色やサイズなどが決まっていて、そこから選んで使用していく。
メリットとしては、以下が考えられる。
- CSSを適用するクラス名を使用しなくてもある程度見やすくかけること
- 型が決まっているためあまり考える必要がないこと
- 組み合わせることである程度自由度があること
- など

1つめのメリットに関して、CSSではクラス名を定義して、CSSファイルでスタイリング、HTMLファイルでクラスの参照を行うことが一般的だと思う。
ただ、CSSファイルのどこに記載したか分からなくなったり(moduleごとに書きましょう)、簡単なものならHTMLにそのまま書きたいので、便利。
3つめのメリットに関して、TailWindを使用したUIコンポーネント集がいろいろあるため、そのコンポーネント集から好きなものを使用し、変えたい部分を簡単に変えることができたりする。

ちなみに、Wordpressなどもpluginで使用できるため、使いたい人は是非確認してみてください。

## デプロイ方法
Github ActionでビルドしてからNetlifyに渡してホスティングしてもらう方法をとっている。
![デプロイ方法](./upload_architect.svg)
デプロイ方法の一連の流れ
1. local環境でコード作成 & gatby developで動作確認
2. githubへコードをpush
3. pushされたコードをgithub actionでビルド
4. ビルドが成功したら、Netlifyへ送信
5. Netlifyでホスティングしデプロイ
はじめはGithub Actionを挟まずにGithubとNetlifyを連携させて、githubの特定のレポジトリにpushされた内容をNetlifyがビルドしデプロイする方法をとっていた。
ただ、Netlifyにはビルドの時間制限がありそれが結構厳しかった。(ビルド時間が300 minを超過すると自動的に課金開始。超過前に警告とか出ないみたい)
そのため、publicレポジトリであれば、時間無制限のgithub actionでビルドして、コンパイル結果をNetlifyに渡すことで、Netlifyでのビルド時間を気にすることなくデプロイできる！
やったー！
これらの方法はいろいろ調べながら行ったが、特に下記の記事を参考にした。
とても助かりました。。
https://blog.70-10.net/2020/05/31/github-actions-deploy-netlify/

また、Netlifyで使用するドメインについて、特に指定しない場合Netlifyが用意するランダムなドメインを使用するが、独自ドメインを持っている場合はNetlifyの設定で独自ドメインへ変更できます。
ここら辺の記事を参考にしました。
ありがとうございました。
https://qiita.com/NaokiIshimura/items/64e060ccc244e38d0c15

## 最後に
これからブログ作ろうかなと思って、悩んでいるひといたら是非使ってみてください！
