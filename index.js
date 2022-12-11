let number = document.getElementById("number2");
let number2 = document.getElementById("number3");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btnReset = document.getElementById("btn-reset");
let winner1 = document.getElementById("winner1");
let winner2 = document.getElementById("winner2");

console.log(number);
let cont1 = 0;
let cont2 = 0;

btn1.addEventListener("click", () => {
  if (
    winner1.innerHTML == "Ganador jugador 1" ||
    winner2.innerHTML == "Ganador jugador 2"
  ) {
    number.innerHTML = 0;
    cont1 = 0;
  } else if (number.innerText == "-") {
    number.innerHTML = 45;
    number2.innerHTML = 45;
  } else if ((cont1 == 45 && cont2 != 45) || number.innerText == "A") {
    winner1.innerHTML = "Ganador jugador 1";
    number.innerHTML = 0;
    cont1 = 0;
  } else if (cont1 == 45 && cont2 == 45) {
    number.innerText = "A";
    number2.innerText = "-";
  } else {
    number.innerText = cont1 + 15;
    cont1 += 15;
  }
});

btn2.addEventListener("click", () => {
  if (
    winner2.innerHTML == "Ganador jugador 2" ||
    winner1.innerHTML == "Ganador jugador 1"
  ) {
    number2.innerHTML = 0;
    cont2 = 0;
  } else if (number2.innerText == "-") {
    number.innerHTML = 45;
    number2.innerHTML = 45;
  } else if ((cont2 == 45 && cont1 != 45) || number2.innerText == "A") {
    winner2.innerHTML = "Ganador jugador 2";
    number2.innerHTML = 0;
    cont2 = 0;
  } else if (cont2 == 45 && cont1 == 45) {
    number2.innerText = "A";
    number.innerText = "-";
  } else {
    number2.innerText = cont2 + 15;
    cont2 += 15;
  }
});

function btn() {
  btnReset.addEventListener("click", () => {
    number.innerHTML = "0";
    number2.innerHTML = "0";
    cont1 = 0;
    cont2 = 0;
    winner1.innerHTML = "";
    winner2.innerHTML = "";
  });
}

btn();

function empate1() {
  if (cont1 == 45 && cont2 == 45) {
    number1.innerText = "A";
  }
}
