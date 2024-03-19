// for (let i = 1; i <= 100; i *= 2) {
//   console.log(`${i}-2024`);
// }
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}-2024`);
// }

// const n = prompt("Enter your number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log(`SUM: ${sum}`);

// const adet = prompt("How many numbers:?");

// for (let sayac = 1; sayac <= adet; sayac++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   console.log(`${sayac}. sayiniz : ${rasgeleSayi}`);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("BYE");

let not = prompt("Lutfen 0-100 arasinda bir not giriniz:");

while (not < 0 || not > 100) {
  console.log("Not 0'dan kucuk veya 100'den buyuk olamaz");
  not = prompt("Lutfen 0-100 arasinda bir not giriniz:");
}

console.log("Notunuz:", not);
