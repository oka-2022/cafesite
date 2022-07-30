'use strict';
// 厳密なエラーチェック

{
  // id="open"にしたから.getElementById
  // ＃不要
  const open = document.getElementById('open');
  // idではなくクラスだけのため.querySelector()
  const overlay = document.querySelector('.overlay');
  // ×クリックで.overlayが閉じるように
  // id="close"にしたから.getElementById
 // ＃不要
  const close = document.getElementById('close');

  // openをクリックしたら、という処理
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  // .overlayが消えてopenのアイコンが表示されるように
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}