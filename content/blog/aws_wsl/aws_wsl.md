---
title: AWS_WSL
date: "2021-10-11"
description: "AWS_WSL"
---

# WSL2へaws-cliをダウンロードする

##  概要
---------------
windowsを使用しており、powershellではaws-cliを利用できるが、WSL2を利用したUbuntuではaws-cliが利用できなかった。
WSL上にAWS CLIをインストールする。

設定まで行っているものが体系的にまとまっていなかったため、一通りの手順を示す。

##  環境
--------------
windows10 home
WSL2: Ubuntu 20.04.2 LTS

## インストール
---------------
下準備
```
$ sudo apt install unzip
```
aws-cliのダウンロード
```
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

$ unzip awscliv2.zip

$ sudo ./aws/install
```
aws-cliがインストールできたか確認
```
$ aws --version
aws-cli/2.2.44 Python/3.8.8 Linux/5.4.72-microsoft-standard-WSL2exe/x86_64.ubuntu.20 prompt/off
```
上記のようになれば、インストールは完了。
アカウントの設定などをする必要があるため、下記コマンドを実行

```
$ aws configure
AWS Access Key ID [None]: 
AWS Secret Access Key [None]: 
Default region name [None]: ap-northeast-1
Default output format [None]: json
```
AWS Access Key ID およびAWS Secret Access Keyではアクセスキーとシークレットキーを入力する。

ここで問題発生。
アクセス認証情報を検証できない様子。

```
$  aws ec2 describe-instances

An error occurred (AuthFailure) when calling the DescribeInstances operation: AWS was not able to validate the provided access credentials
```
原因を調べていたら、下記のドキュメントが対応しそう。
https://csblog.casareal.co.jp/archives/272
記事より、iamが古くなっていることが原因である可能性があるため、iamを更新し対応。
無事成功。
```
$ aws ec2 describe-instances
{
    "Reservations": []
}
```

## 終わりに
以上、これでWSLを用いたUbuntu環境でもaws cliをインストールできるようになった。
ただ、この方法を用いた場合powershellでnpmをアップデートすると、ubuntu側とバージョンが異なるため注意が必要。














