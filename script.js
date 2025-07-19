// 1-vazifa
// 1-savol
// let x = +prompt("Sonizni kiriting")
// if ( x % 2 === 0){
//     console.log("x son juft");
// }else{
//     console.log("x son toq");
// }

// 2-savol
// let x = +prompt("Sonizni kiriting")
// if ( x > 0){
//     console.log("x son musbat ");
// }if(x == 0){
//     console.log("x son 0ga teng ");
// }else{
//     console.log("x son manfiy ");
// }

// 3-savol
// let a = +prompt("A sonizni kiriting")
// let b = +prompt("B sonizni kiriting")

// function check(){
//     if(a > b){
//         console.log("A son B sondan katta");
//     }if(a == b){
//         console.log("A son B sondan teng");
//     }else{
//         console.log("B son A sondan katta");
//     }

// }
// check()

// 4-savol
// let point = prompt("Talabaning olgan balini kiriting");

// if (point >= 1 && point <= 59) {
//     console.log("Talabaning bahosi 2, imtihondan o'tmadi");
// } else if (point >= 60 && point <= 69) {
//     console.log("Talabaning bahosi 3, imtihondan o'tdi");
// } else if (point >= 70 && point <= 89) {
//     console.log("Talabaning bahosi 4, imtihondan o'tdi");
// } else if (point >= 90 && point <= 100) {
//     console.log("Talabaning bahosi 5, imtihondan o'tdi");
// } else {
//     console.log("Noto'g'ri ball kiritildi!");
// }

// 5-savol
// function check() {
//     const togriLogin = "Ustudypupil";
//     const togriParol = "Frontend";

//     const login = prompt("Loginni kiriting:");
//     const parol = prompt("Parolni kiriting:");

//     if (login === togriLogin && parol === togriParol) {
//         console.log("Muvaffaqiyatli");
//     } else if (login !== togriLogin && parol === togriParol) {
//         console.log("Kiritilgan login noto'g'ri");
//     } else if (login === togriLogin && parol !== togriParol) {
//         console.log("Kiritilgan password noto'g'ri");
//     } else {
//         console.log("Kiritilgan login va password noto'g'ri");
//     }
// }

// check();

// 2-vazifa
// 1-savol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let res = arr.filter((n) => n % 2 === 0)
// console.log(res);

// 2-savol
// let arr = +prompt("Sonlaringizni kiriting")
// let res = arr.reduce((acc, cur) => acc + cur)
// console.log(res);

// 3-savol
// let arr = [7, -8, 2, 6, 9, -4, 12, 3, -11, 18];
// let sum = 0;

// for (let num of arr) {
//   if (num > 0 && num % 2 === 0) {
//     sum += num;
//   }
// }
// console.log(sum);

// 4-savol
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// 5-savol
// let arr = [2, -8, 2, 1, 5, 4, -15, 9, 13];
// let max = arr[0];
// let min = arr[0];
// for (let num of arr) {
//   if (num > max) max = num;
//   if (num < min) min = num;
// }
// console.log("Kattasi:", max + ".", "Kichigi:", min);




