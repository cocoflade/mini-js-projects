const colors = ["blue", "white", "red", "green"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = 3;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
