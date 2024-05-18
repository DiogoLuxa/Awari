const form = document.querySelector(".form");
const input = document.querySelector("#numero");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "" || input.value < 1) {
    alert("Número inválido! Digite um número maior que 0.");
  } else {
    let triangle = "*";
    const number = parseInt(input.value);

    for (let i = 1; i <= number; i++) {
      console.log(triangle.repeat(i)); // repete o caractere "*" de acordo com o valor de "i" e imprime no console até o valor de "number" ser atingido.
    }
  }
});
