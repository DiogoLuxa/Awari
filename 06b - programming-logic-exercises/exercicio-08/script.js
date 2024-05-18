let ages = [];

for (let i = 1; i < 6; i++) {
  let age;
  do {
    age = prompt(`Digite a ${i}º idade de 5:`);
  } while (isNaN(age) || age <= 0 || age > 120 || age.includes("."));
  ages.push(parseInt(age));
}

let sum = ages.reduce((acc, age) => acc + age, 0);
let average = sum / ages.length;

console.log(`A média das idades é ${average}`);
