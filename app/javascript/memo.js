function post (){
  //リクエストを送信する処理
  // 送信ボタンの要素を取得
  document.getElementById("submit");
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

  });
 };
 
 window.addEventListener('load', post);