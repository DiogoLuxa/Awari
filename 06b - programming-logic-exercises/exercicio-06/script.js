const form = document.querySelector(".form");
const input = document.querySelector("#numero");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "" || input.value < 1) {
    alert("Número inválido! Digite um número maior que 0.");
  } else {
    const number = parseInt(input.value);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} * ${i} = ${number * i}`);
    }
  }
});
