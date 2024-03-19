// for (let i = 1; i <= 100; i *= 2) {
//   console.log(`${i}-2024`);
// }
for (let i = 1; i <= 100; i++) {
  console.log(`${i}-2024`);
}

const n = prompt("Enter your number");
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
  console.log(sum);
}
console.log(`SUM: ${sum}`);

const number = prompt("How many numbers:?")