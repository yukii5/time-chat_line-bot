// LINE Message API アクセストークン
var ACCESS_TOKEN = '※※※※※※※※※※※';

function broadcast() {
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/broadcast', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    payload: JSON.stringify({
      messages: [
        {
            type: 'text',
          text: 'シフト提出お願いします　\n\n https://time-chat.herokuapp.com/  \n\n\n連絡がある場合は、\n\n名前:\n\n用件:\n\nのように入力して下さい。'
        },
      ]
    }),
  });
}
