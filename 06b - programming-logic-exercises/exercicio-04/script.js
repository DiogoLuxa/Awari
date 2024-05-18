const numbers = [2, 3, 5, 7];
const primos = [];
for (let x = 2; x <= 100; x++) {
  if (numbers.includes(x)) {
    primos.push(x);
  } else if (x % 2 === 0 || x % 3 === 0 || x % 5 === 0 || x % 7 === 0) {
    continue;
  } else {
    primos.push(x);
  }
}
console.log(primos);
