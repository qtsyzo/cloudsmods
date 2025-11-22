const audio = new Audio('music.mp3');

window.addEventListener('click', () => {
  audio.volume = 0.35;
  audio.play();
}, { once: true });

console.log("Cloud's Snowy Hub loaded.");
