// LINE developersのメッセージ送受信設定に記載のアクセストークン
const LINE_TOKEN = '※※※※※※※※※※※'; // Messaging API設定の一番下で発行できるLINE Botのアクセストークン（Channel Secretはいらないみたいです。）
const LINE_URL = 'https://api.line.me/v2/bot/message/reply';

//postリクエストを受取ったときに発火する関数
function doPost(e) {

  // 応答用Tokenを取得
  const replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
  // メッセージを取得
  const userMessage = JSON.parse(e.postData.contents).events[0].message.text;

  //メッセージを改行ごとに分割
  const all_msg = userMessage.split("\n");
  const msg_num = all_msg.length;

  //返答用メッセージを作成
  const messages = [
    {
      'type': 'text',
      'text':  userMessage,
    }
  ]

  // ***************************
  // スプレットシートからデータを抽出
  // ***************************
  // 1. 今開いている（紐付いている）スプレッドシートを定義
  const sheet     = SpreadsheetApp.getActiveSpreadsheet();
  // 2. ここでは、デフォルトの「シート1」の名前が書かれているシートを呼び出し
  const listSheet = sheet.getSheetByName("シート1");
  // 3. 最終列の列番号を取得
  const numColumn = listSheet.getLastColumn();
  // 4. 最終行の行番号を取得
  const numRow    = listSheet.getLastRow()-1;
  // 5. 範囲を指定（上、左、右、下）
  const topRange  = listSheet.getRange(1, 1, 1, numColumn);      // 一番上のオレンジ色の部分の範囲を指定
  const dataRange = listSheet.getRange(2, 1, numRow, numColumn); // データの部分の範囲を指定
  // 6. 値を取得
  const topData   = topRange.getValues();  // 一番上のオレンジ色の部分の範囲の値を取得
  const data      = dataRange.getValues(); // データの部分の範囲の値を取得
  const dataNum   = data.length +2;        // 新しくデータを入れたいセルの列の番号を取得

  // ***************************
  // スプレッドシートにデータを入力
  // ***************************
  
  //最初のA列は入力時の時間を入れる
  const dataNow = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd')
  
  SpreadsheetApp.getActiveSheet().getRange(dataNum, 1).setValue(dataNow);
  
  // 最終列の番号まで、順番にスプレッドシートの左から2番目の場所にデータを新しく入力
  for (let i = 0; i < msg_num; i++) {
    SpreadsheetApp.getActiveSheet().getRange(dataNum, i+2).setValue(all_msg[i]);
  }

  const after_msg = {
    'type': 'text',
    'text': "メッセージを承りました。",
  }
  messages.push(after_msg);

  //lineで返答する
  UrlFetchApp.fetch(LINE_URL, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': `Bearer ${LINE_TOKEN}`,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': messages,
    }),
  });

  ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);

}
