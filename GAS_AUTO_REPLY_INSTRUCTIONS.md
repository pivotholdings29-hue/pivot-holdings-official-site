# Googleフォーム自動返信設定マニュアル

Googleフォームの標準機能では実現できない、ToC（一般のお客様）とToB（法人・パートナー様）それぞれに合わせた丁寧な自動返信メールを送るための設定手順です。

## 1. サンクスページの設定（Googleフォーム側）

フォーム送信後に、今回作成した「送信完了ページ」へお客様を誘導する設定です。

1.  Googleフォームの編集画面を開きます。
2.  「設定」タブをクリックします。
3.  「プレゼンテーション」＞「確認メッセージ」の「編集」をクリックします。
4.  以下のメッセージを入力して保存します。
    ```text
    送信ありがとうございます。
    以下のリンクをクリックして、サイトへお戻りください。
    https://pivotholdings.co.jp/thanks
    ```
    ※Googleフォームの仕様上、自動遷移はできないため、リンクを表示してクリックしていただく形になります。

---

## 2. 自動返信メールの設定（GAS）

Google Apps Script (GAS) を使って、フォーム回答時に自動でメールを送る設定です。
**ToC用フォーム、ToB用フォームそれぞれで**以下の手順を行ってください。

### 手順

1.  Googleフォームの編集画面右上の「︙（その他）」アイコンをクリックし、「スクリプト エディタ」を選択します。
2.  開いた画面のコード入力エリア（`function myFunction()...` と書かれている部分）をすべて消し、以下のコードを貼り付けます。
3.  コード内の `【ここを変更】` と書かれている部分（件名、本文、署名など）を、それぞれの用途に合わせて書き換えます。
4.  「保存（フロッピーアイコン）」をクリックし、プロジェクト名（例: `自動返信スクリプト`）を入力して保存します。
5.  左側メニューの「トリガー（時計アイコン）」をクリックします。
6.  右下の「トリガーを追加」ボタンをクリックします。
    *   実行する関数: `sendAutoReply`
    *   イベントのソース: `フォームから`
    *   イベントの種類: `フォーム送信時`
    *   エラー通知設定: `毎日通知`（任意）
7.  「保存」をクリックすると、Googleアカウントへのアクセス許可を求められます。
    *   アカウントを選択 → 「詳細」 → 「（安全ではないページ）に移動」 → 「許可」の順に進んでください。

### コピペ用コード（GAS）

```javascript
function sendAutoReply(e) {
  // --- 設定エリア（ここを書き換えてください） ---
  
  // メールの件名
  const SUBJECT = "【pH株式会社】ご注文・お問い合わせありがとうございます";
  
  // 送信者名（メールの差出人名）
  const SENDER_NAME = "pH株式会社";
  
  // 本文（\n は改行を表します）
  const BODY = 
    "この度は、pH株式会社の商品をご注文・お問い合わせいただき、誠にありがとうございます。\n" +
    "以下の内容で承りました。\n\n" +
    "担当者が内容を確認次第、改めてご連絡させていただきます。\n" +
    "（ご注文の場合は、振込先口座または決済URLをご案内いたします）\n\n" +
    "--------------------------------------------------\n" +
    "【回答内容】\n";

  // 署名
  const SIGNATURE = 
    "\n--------------------------------------------------\n" +
    "pH株式会社\n" +
    "Web: https://pivotholdings.co.jp\n" +
    "--------------------------------------------------";

  // --- 設定エリア終了 ---

  try {
    // フォームの回答を取得
    const response = e.response;
    const itemResponses = response.getItemResponses();
    let messageBody = BODY;

    // メールアドレスの収集設定がオンの場合の回答者メールアドレス
    let respondentEmail = response.getRespondentEmail();

    // 回答内容を本文に追加
    for (let i = 0; i < itemResponses.length; i++) {
      const itemResponse = itemResponses[i];
      const question = itemResponse.getItem().getTitle();
      const answer = itemResponse.getResponse();
      
      messageBody += "■" + question + "\n" + answer + "\n\n";

      // メールアドレス収集設定がオフの場合、質問項目からメールアドレスを取得する処理（必要に応じて有効化）
      // if (question.includes("メールアドレス")) {
      //   respondentEmail = answer;
      // }
    }

    messageBody += SIGNATURE;

    // メール送信
    if (respondentEmail) {
      GmailApp.sendEmail(respondentEmail, SUBJECT, messageBody, {
        name: SENDER_NAME
      });
    }

  } catch (error) {
    console.error("メール送信エラー:", error);
  }
}
```

### 注意点
*   **メールアドレスの収集**: Googleフォームの「設定」＞「回答」＞「メールアドレスを収集する」を必ず「確認済み」または「回答者からの入力」に設定してください。これがないと、返信先が取得できません。
*   **テスト送信**: 設定後は必ずご自身でフォームに入力し、自動返信メールが届くかテストを行ってください。
