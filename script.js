const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
console.log(result);
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
    // console.log(e.target.id);
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
