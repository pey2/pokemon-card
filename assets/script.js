let isTextChange = false;

function flipCard() {
  let tapCard = document.getElementById("tap-card");

  if (!isTextChange) {
    tapCard.innerHTML = "You got Wooper!";
  } else {
    tapCard.innerHTML = "Tap the Card";
  }

  isTextChange = !isTextChange;

  document.getElementById("card").classList.toggle("flipped");
}
