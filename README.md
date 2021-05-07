# ツール・ライブラリの名前

time-chat_line-bot

## 簡単な説明

LINE_BOTからの自動投稿機能です。
返信内容をスプレッドシートへ記載します記載します。

## 機能
- gasの時限トリガーで指定した日時に指定した文章を自動投稿(teiki.gsの15行目)
- 返信が来たら内容文をスプレッドシートに記載

## 使い方

1. 以下の２つのトークンを入力
    LINE Message API アクセストークン
    LINE developersのメッセージ送受信設定に記載のアクセストークン
    
2. 自動で送る文章を入力(teiki.gsの15行目を変更)

3. gasの時限トリガーをセット

4. 返信が来た文をスプレッドシートに自動入力 


## イメージ画像
### LINE_BOT受信画面
<img width="727" alt="line_home" src="https://user-images.githubusercontent.com/71483628/116628696-a7c1a980-a98a-11eb-9a00-17ac8ba4472c.png">

### LINE_BOT詳細画面
<img width="364" alt="line_show" src="https://user-images.githubusercontent.com/71483628/116628703-aabc9a00-a98a-11eb-8959-134c2fcad384.png">

### 返信内容(スプレッドシート)画面
<img width="672" alt="LINE_spreadsheet" src="https://user-images.githubusercontent.com/71483628/117395154-686afe00-af32-11eb-9865-d8a01a2b2a2a.png">
