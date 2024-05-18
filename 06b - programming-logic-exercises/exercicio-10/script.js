const form = document.querySelector(".form");
const input = document.querySelector("#numero");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "" || input.value < 1) {
    alert("Número inválido! Digite um número maior que 0.");
  } else {
    let counter = 0;
    let square = "";
    const number = parseInt(input.value);

    while (counter < number) {
      // desenha a coluna
      for (let i = 1; i <= number; i++) {
        // desenha a linha
        square += "#";
      }
      square += "\n"; // pula a linha
      counter++;
    }
    console.log(square);
  }
});
