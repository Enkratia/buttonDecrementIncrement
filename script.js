const minus = document.querySelector(".minus"),
  plus = document.querySelector(".plus"),
  num = document.querySelector(".num");

let a = 0;

plus.addEventListener("click", () => {
  a++;

  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
})

minus.addEventListener("click", () => {
  if (a > 0) {
    a--;

    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
})