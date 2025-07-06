// HTMLの読み込みが終わってから実行するおまじないです
document.addEventListener('DOMContentLoaded', function() {

  // HTMLからidが 'myButton' の要素（ボタン）を探してきます
  const button = document.getElementById('myButton');

  // HTMLからidが 'emoji-display' の要素（表示エリア）を探してきます
  const display = document.getElementById('emoji-display');

  // ボタンに「クリックされたら、以下の処理を実行する」という聞き耳を立てます
  button.addEventListener('click', function() {
    // 表示エリアのテキストを絵文字にします
    display.innerText = '🖕';
  });

});