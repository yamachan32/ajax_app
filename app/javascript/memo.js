// HTML生成部分を切り出し
const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};


function post (){
  //リクエストを送信する処理
  // 送信ボタンの要素を取得
  const submit = document.getElementById("submit");
  // クリックした時にイベント発火
  submit.addEventListener("click", (e) => {
    // 既存（フォームからのリクエスト）のクリック処理をキャンセル
    e.preventDefault();
    // 送信クリック後の処理
    // フォームの要素を取得
    const form = document.getElementById("form");
    // 投稿フォームから値を取得
    const formData = new FormData(form);
    // HTTPリクエスト用オブジェクトを作成
    const XHR = new XMLHttpRequest();
    // XHRを初期化、リクエスト内容を POST /posts 非同期通信ONで設定
    XHR.open("POST", "/posts", true);
    // レスポンスのデータタイプをJSONに指定
    XHR.responseType = "json";
    // formDataを持たせてXHRを送信
    XHR.send(formData);
    // onload（通信成功）時の処理を記述
    XHR.onload = () => {

      // リクエストエラー処理
      if (XHR.status != 200) {
        // ステータスコードとエラー記述をalert
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      // htmlを挿入する要素を取得
      const list = document.getElementById("list");
      const formText = document.getElementById("content");


      // 関数に切り出し

      // レスポンスからpostハッシュを取得し、item変数を定義
      // const item = XHR.response.post;
      // // item変数を利用して、挿入するpost表示部分のHTMLを生成し、html変数を定義
      // const html = `
      //   <div class="post">
      //     <div class="post-date">
      //       投稿日時：${item.created_at}
      //     </div>
      //     <div class="post-content">
      //       ${item.content}
      //     </div>
      //   </div>`;
      //   // listの最後の後にhtmlを挿入
      //   list.insertAdjacentHTML("afterend", html);
 
        // 切り出したbuildHTMLを呼び出して、HTMLを更新
        list.insertAdjacentHTML("afterend", buildHTML(XHR));
 
        // フォームの入力値をリセット
        formText.value = "";
    };

  });
 };
 
 window.addEventListener('load', post);