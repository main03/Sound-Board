window.addEventListener("keydown", function(e) {
  const keyDiv = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0; // rewind to start
  audio.play();

  keyDiv.classList.add("active");
});

window.addEventListener("keyup", function(e) {
  const keyDiv = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (keyDiv) keyDiv.classList.remove("active");
});
