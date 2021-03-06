---
title: AWS SMSについて調査してみた
date: "2022-06-15"
tags: ["aws","SAP"]
hero: ./AWS-Logo.svg
description: "search AWS SMS"
---

## はじめに
SAP対策のための備忘のため情報をまとめてみました。
もしご指摘あればご連絡いただければと思います。

まずAWSの公式DOCSより下記のことが書いてあります。
>AWS Server Migration Service (AWS SMS) は、オンプレミスの VMware vSphere、Microsoft Hyper-V/SCVMM、または Azure 仮想マシンの AWS クラウドへの移行を自動化します

ざっくりイメージとしては、オンプレ上の仮想環境をクラウドへの移行を自動化するサービスです。

## どんなことできるの
### クラウドへの移行プロセスの簡素化
 移行時ののめんどくさい作業を自動で行ってくれたり、レプリケーションしたAMIを作成してくれます。作成したAMIですぐにEC2を作成できます。GUIだけでなくAWS CLIでも移行できるようです。また移行する際には移行元のVMへSMS Connector(OVF)を導入する必要があります。
  
### 複数サーバの移行
複数のサーバを一度に移行できます。デフォルトは50 VMです。

### 増分更新
増分更新ができるため、段階的にテストを行いながら移行することができます。
これにより一度に移行する必要がないため通信量を削減できます。
また、細かな増分更新によりレプリケーション時間が短くなり結果的にダウンタイムの最小化が図れます。

### 対応OS
LinuxやWindows等さまざまなオペレーティングシステムに対応してます。

### ダウンタイムの最小化
最小限のダウンタイムで移行ができるのでビジネスインパクトを下げることができます。

## 費用
AWS SMSにかかる費用は無料。ただ作成したAMIやEC2等に費用がかかります。またDataTransferにも費用がかかるので、大規模な移行やデータ量が多い場合は注意が必要そうです。

## 比較
VMを移行する際の似たようなサービスとして`VM Import`がある。
違いとしては以下の点。
- VMImportよりもSMSの方が手順が少ない
- SMSはコンソール上で操作できる
等々あります。

基本的にはSMSはVMImportの上位互換なので、これを使用する必要はあまりなさそうです。

## まとめ
SMSはVMからEC2への移行時に使用するものということで、あまりVMを使ってこなかったので勉強になりました。
ただ、今現在は[AWS Application Migration Service](https://aws.amazon.com/jp/application-migration-service/)が推奨されているので実際に導入される方はまずそちらを検討する必要がありそうです。

## 補足
### AWS Application Migration Service（MGN）について
SMSとの違いについて調査したところ以下の点があるようです。

下記AWSドキュメント抜粋
- AWS マネジメントコンソールからサービス運用可能。
- AWS Identity and Access Management (IAM) を使用して許可とアクセスを制御可能。
- 公共インターネットに接続せずにサービスを運用可能。
- 移行メタデータは、移行されたインスタンスと同じ AWS リージョンに保存。
- 必要に応じて、エージェントレスレプリケーションオプション (vCenter 用) を活用します。
- CLI と SDK だけでなく、移行固有のワークフローにより適した新しい API を使用します。
- Amazon CloudWatch と AWS CloudTrail を使用して、AWS Application Migration Service をモニタリングします。
- (Blueprints ではなく) Amazon EC2 起動テンプレートを使用して、テストインスタンスとカットオーバーインスタンスを起動する方法をより適切に制御します。
- タグを使用してソースサーバーを整理し、アクセス許可を制御します。

また、ドキュメントを読むと操作性やリソース・ユーザー管理、モニタリングの機能が強化されたようです。
ただ、移行期間が90日を超えると料金がかかるようなので、移行に時間がかかることが見込まれる場合は注意が必要そうです。


## 参考
- https://docs.aws.amazon.com/ja_jp/server-migration-service/latest/userguide/server-migration.html
- https://qiita.com/miyuki_samitani/items/5c6586151c02f7ef0cef
- https://dev.classmethod.jp/articles/server-migration-service/
- https://aws.amazon.com/jp/application-migration-service/when-to-choose-aws-mgn/