---
title: gatsby-transformer-remarkに付随するpluginがうまく動かなかったのを直した話
date: "2021-10-23"
tags: ["gatsby"]
hero: ./gatsby-logo.svg
description: "change gatsby-config with gatsby-transformer-remark problem"
---


## はじめに
gatsby-transformer-remarkを使用して、markdownからhtmlに変換する際に、gatsby-transformer-remarkに追記していたpluginがうまく動かなかったため、私の場合の解決方法を紹介します。

## 結論
gatsby-config.jsに複数のatsby-transformer-remarkがpluginとして追加されていないこと確認し、複数ある場合はまとめる。

## pluginの紹介
### gatsby-transformer-remark
markdownをhtmlにうまいこと変換してくれるプラグイン。
同じような機能を持つpluginとして`gatsby-plugin-mdx`がある。
mdxはjsとmarkdownが一緒に掛けるため独自のモジュールをわりかし簡単に使用できることから導入しようか迷っていた。
`gatsby-plugin-mdx`は導入が大変そうなのと、ブログを作成に使用した`gatsby-starter-blog`は初めから`gatsby-transformer-remark`が入っていたため`gatsby-transformer-remark`をそのまま使用している。

`gatsby-transformer-remark`の特徴として、pluginを追加していることで`gatsby-transformer-remark`の機能を強化していく。
ただ、このpluginの追加が案外厄介。
ここで今回引っかかった。

### plugin導入方法
一応、plugin導入方法を紹介。
gatsbyにpluginを入れる際には`gatsby-config.js`にどんどんpluginを追加していく。
そして、`gatsby-transformer-remark`に付随するpluginは`gatsby-transformer-remark`のpluginの中に追加していく。
```javascript:title=gatsby-config.js
module.exports = {
  plugins: {
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            }
          }
        ]
      }
    }
  }
}
```
ここでは、画像を張り付けたりする場合に使用する`gatsby-remark-images`と`gatsby-remark-responsive-iframe`をpluginとして追加している。

## 問題点
今回問題となったのは、`gatsby-transformer-remark`に付随するpluginが急に反映されなくなってしまったこと。
原因はよくわかってないが、何かしらpluginのバージョンをあげたときに問題が発生した。
ちなみに今回の問題で、ログなど吐かれていなかったためより解決までに時間がかかった。

### 環境
OS : Windows 10
npm : 6.14.15
node.js : v14.18.0
gatsby : 3.14.1

## とった方法
stackoverflowとかgithubのissueとかいろいろ見て試せること色々試してみた。
最終的には最後の方法で治った。
今思えば、なんでこれ初めにやらなかったのかって話だけど、複数回読んでも今まで動いていたのと、`gatsby-transformer-remark`自体は正常に動いていたので、まったく気にしてなかった。
- そもそもパッケージ入っているか確認する
- `gatsby-remark-prismjs`のpluginの順番を入れ替える
- `.cache`ファイルを削除する・npmのバージョンを新しくする
- `gatsby-transformer-remark`と動かないpluginを入れなおす
- `gatsby-config.js`内の`gatsby-transformer-remark`を一つに統合する
  
### そもそもplugin入っているか確認する
今回は問題が発生する直前まで動いていたから確認する必要はあまりないが一応確認。
npmでinstallしたpluginを出力するコマンドで導入済みか確認。
```shell:title=shell
npm list --depth 0
```
また、`gatsby-config.js`にも使用するpluginが記載されているか再確認。
どちらもあった。

### `gatsby-remark-prismjs`のpluginの順番を入れ替える
公式のpluginの説明サイトなどに良く記載があるが、`gatsby-remark-prismjs`というコードをきれいにするpluginが導入されていた場合、`gatsby-transformer-remark`に付随するpluginの順番を気にしなければならない。
基本的に`gatsby-remark-prismjs`の前にpluginを持ってくれば問題は生じないみたいなので、`gatsby-remark-prismjs`は一番最後に記述している。
順番を入れ替えたけど治らなかった。なんなら、急に反映されなくなるまで正常に動いていた。

### `.cache`ファイルを削除する・npmのバージョンを新しくする
これはgithubのissueで`gatsby-remark-images`がうまく動かないどうしよ問題の解決策だった。
`.cache`ファイルを削除するためには下記コマンドを実行する。
```shell:title=shell
 gatsby clean
```
またnpmのバージョンを最新にするなどしてみた。
```shell:title=shell
   npm install npm@latest -g
```
全然だめでした。。。

### `gatsby-transformer-remark`と動かないpluginを入れなおす
こういうのは入れなおせば治るやろと思って、一度周辺のpluginをuninstallして、再インストールしました。
```shell:title=shell
   npm uninstall "アンインストールしたいplugin"
   npm install "アンインストールしたplugin"
```
ダメでした。

### `gatsby-config.js`内の`gatsby-transformer-remark`を一つに統合する
これで解決しました。
`gatsby-config.js`を見直していたら、`gatsby-transformer-remark`がなぜか2箇所で記載されていました。
```javascript:title=gatsby-config.js
module.exports = {
  plugins: {
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            }
          },
        ]
      }
    },
    ・
    ・
    ・
    ・
    ・
    ・
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            }
          }
        ]
      }
    }
  }
}
```
それを一つに集約
```javascript:title=gatsby-config.js
module.exports = {
  plugins: {
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            }
          }
        ]
      }
    }
  }
}
```
これで、うまく動きました。
## さいごに
`gatsby-transformer-remark`がちゃんと動いていた分探すのに時間がかかってしまいました。
結構初歩的なところだったから、きちんと見直ししないとだめだなと反省。


