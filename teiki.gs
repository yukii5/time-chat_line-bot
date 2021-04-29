// LINE Message API アクセストークン
var ACCESS_TOKEN = 'PcPtp3lsPPtALDm5ADFjZxsJXn5dDgiejYbHOSJJDTXXmIBh557b1FohC09ZyNUrr1b3I2/33FB+8Yplz8Ir84ndTdaGqLGu3Urk6lkwoU1GCgDrkAJcfX9babiP4xLAZ3/kmAbjjY9GQ5PdoswkeQdB04t89/1O/w1cDnyilFU=';

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