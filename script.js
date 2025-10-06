const showBtn = document.getElementById('showBtn');
const message = document.getElementById('message');
const music = document.getElementById('music');

showBtn.addEventListener('click', () => {
  message.classList.add('show');
  music.play();
});


