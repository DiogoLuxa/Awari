const form = document.querySelector(".form");
const input = document.querySelector("#numero");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "" || input.value < 1) {
    alert("Número inválido! Digite um número maior que 0.");
  } else {
    const number = parseInt(input.value);
    const odd = [];
    const even = [];
    for (let x = 1; x <= number; x++) {
      if (x % 2 === 0) {
        even.push(x);
      } else {
        odd.push(x);
      }
    }
    console.log(`Números ímpares: ${odd} \nNúmeros pares: ${even}`);
  }
});
