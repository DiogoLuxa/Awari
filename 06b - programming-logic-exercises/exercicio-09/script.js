let agesMoreThan18 = [];

for (let i = 1; i < 11; i++) {
  let age;
  do {
    age = prompt(`Digite a ${i}º idade de 10:`);
  } while (isNaN(age) || age <= 0 || age > 120 || age.includes("."));

  parseInt(age) >= 18 ? agesMoreThan18.push(parseInt(age)) : null;
}

console.log(
  `A quantidade de pessoas com idade maior ou igual a 18 anos é: ${agesMoreThan18.length}`
);
