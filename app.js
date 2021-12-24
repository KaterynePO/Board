const board = document.querySelector("#board");
const colors = ["#FF1700", "#FF8E00", "#FFE400", "#06FF00", "#B000B9"];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
}

function getRandomColor() {
  //const index = Math.floor(Math.random() * colors.length);
  //return colors[index];
  return colors[Math.floor(Math.random() * colors.length)];
}
