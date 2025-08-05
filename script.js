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

// 3-vazifa
// 1-savol
// let arr = [3, 8, 9, 7, 5]
// let res = arr.slice(4, 5).map((n) => n ** 2).concat(arr.slice(0, 4))
// console.log(res);

// 2-savol
// let arr = [9, 8, 5, 1, 6, 4]
// let juft = arr.filter((n) => n % 2 === 0)
// let res = juft.reduce((acc, cur) => acc + cur)
// console.log(res);

// 3-savol
// let arr = [2, -8, 9, 1, -15, 3, 0, 5]
// let musbat = arr.filter((n) => n > 0)
// let res = musbat.reduce((acc, cur) => acc * cur)
// console.log(res);

// 4-savol
// let arr = [6, 1, 3, 5, 6, 2, 0, 4]
// let arrays = arr.filter((n) => n > 2)
// let correct = arrays.sort((a, b) => a - b)
// let res = correct.map((n) => n ** 2)
// console.log(res);




// 5-savol
// let arr = [1, [2, 3], [4, [5, 6, 7]]]
// let full = arr.flat(2)
// let res = full.filter((n) => n % 2 !== 0)
// console.log(res);

// 4-vazifa
// 1-savol
// let arr = ["Jasmina", "Muhammadior", "Bek", "Yusufxon", "Asad", "John"]
// let res = arr.filter((n) => n.length > 5)
// console.log(res);

// 2-savol
// let points = [1, 2, 3, 4, 5, 6]
// let min = Math.min( ...points);
// let max = Math.max( ...points);
// let res = max - min
// console.log(res);

// 3-savol
// let str = ["seVinCH", "IbrohiM", "miRKomil", "JURABEK", "abdulaziz"]
// let res = str.map((n) => n[0].toUpperCase() + n.slice(1).toLowerCase())
// console.log(res);

// 4-savol
// let a = [16, 20, 8, 2, 12, 27, 9, 13];
// let b = a[a.length - 1];
// let res = a.find((n) => n < b) || 0;

// console.log(res);

// 5-savol
// const arr = [1, 2, 2, 3, 4, 4, 5];
// const res = arr.reduce((unique, item) => {
//   const count = arr.filter((n) => n === item).length;
//   if (count === 1) {
//     unique.push(item);
//   }
//   return unique;
// }, []);
// console.log(res);

//5-vazifa
// 1-savol
// let obj={

// }
// obj.name ="Palonchi"
// obj.age=12
// obj.country="earth"
// console.log(obj);

// 2-savol
// let obj={
//     valuta: "Dollar",
//     miqdor: 100,
// }
// let price =(6 * 5) + (10 * 2)
// obj.miqdor=100 - price

// console.log(obj);

// 3-savol
// const obj = {
//     Anvar: 19,
//     Salim: 21,
//     Jasur: 13
// };

// const maxName = Object.entries(obj).reduce((max, curr) => {
//     return curr[1] > max[1] ? curr : max;
// });

// console.log(`Yoshi eng katta: ${maxName[0]} (${maxName[1]} yosh)`);


// 4-savol
// const obj = { name: "John", age: 22, city: "Tashkent" };

// const updated = Object.entries(obj).map(([key, value]) => {
//   if (key === "age") return [key, 30];
//   if (key === "city") return [key, "New York"];
//   return [key, value];
// });

// console.log(updated);

// 5-savol
// let obj = { Salim: 60, Ali: 50, Kimsan: 90 };
// for (let key in obj) {
//   if (obj[key] < 60) {
//     delete obj[key];
//   }
// }
// console.log(obj);

// 6-vazifa
// 1-savol
// let obj={
//     name:'Ali' // Name misol uchun
// }
// let res = Object.values(obj)
// console.log(res); 

// 2-savol
// let obj ={
//     a:15,
//     b:10,
// }
// let val = Object.values(obj)
// let res = val.reduce((acc, cur)=>acc*cur)
// console.log(res);

// 3-savol
// let obj = {
//     soliq: 20,
//     kamunal: 12,
//     prava: 980,
//     havo: 3,
//     qanchaKotarildi(foiz) {
//     for(let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] += obj[key] * foiz / 100;
//         }   
//     }
// }
// };

// obj.qanchaKotarildi(15);
// console.log(obj);   

// 4-savol
// let obj = {
//     Salim: 50,
//     Vali: 87,
//     Ali: 12,
//     deleteUser(name) {
//         delete this [name];
//     }
// }

// obj.deleteUser("Vali")
// console.log(obj);

// 5-savol
// let obj={
//     olma:7,
//     mandarin:4,
//     banan:6,
//     apelsin:1,
// }
// for(let x in obj){
//     if(obj[x] % 2 !== 0){
//         delete obj[x]

//     }
// }
// console.log(obj);

// 7-vazifa
// 1-savol
// let obj={
//     Salim:25,
//     Ali:17,
//     Malika:21,
// }
// for(let key in obj){
// obj[key]=obj[key] +2

// }
// console.log(obj);

// 2-savol
// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Sami", age: 22 }
// ];

// users.forEach(user => {
//   console.log(`${user.name} : ${user.age}`);
// });


// 3-savol
// let obj = {
//     a: 10,
//     b: "hello",
//     c: 5,
//     d: true
// }
// for (let x in obj) {
//     if (typeof obj[x] !== "number") {
//         delete obj[x]
//     }
// }
// console.log(obj);

// 4-savol
// let person = {
//     name:"Lola",
//     age: null,
//     job:"Teacher",
//     city: null,
// }
// for (let x in person) {
//     if (typeof person[x] !== "string") {
//         delete person[x]
//     }
// }
// console.log(person);

// 5-savol
// const users = [
//     {
//         name: "Ali",
//         age: 17,
//     },
//     {
//         name: "Vali",
//         age: 19,
//     },
//     {
//         name: "Sami",
//         age: 21,
//     },
// ]
// const res = users.filter((n) => n.age > 18);
// console.log(res);

// 8-vazifa
// 1-savol
// try {
//     let a = +prompt("Birinchi raqamni kiriting")
//     let b = +prompt("Ikkinchi raqamni kiriting")
//     let c = prompt("Amalni kiriting (+, -, *, /):")
//     let natija
//     if (c === "+") {
//         a + b
//     } else if (c === "-") {
//         a - b
//     } else if (c === "*") {
//         a * b
//     } else if (amal === "/") {
//         if (b === 0) {
//             throw "0 bolish mumkinmas";
//         }
//         natija = a / b;
//     } else {
//         throw "Amal notogri";
//     }
//     alert( natija);
// }
// catch (xato) {
//     alert("Xato: " + xato);
// }
// 2-savol
// let name = prompt("Ismingizni kiriting");
// let email = prompt("Emailizni kiriting");
// let age = +prompt("Yoshingizni kiriting");
// try {
//     if (name.length <= 3) {
//         console.log("Ism kamida 3 ta harf bo'lishi shart")
//     }if (!email.includes("@") || !email.includes(".")) {
//         console.log("Emailda @ va . bo'lishi shart")
//     } if (age <= 7) {
//         console.log("Yosh 7 dan katta bo'lishi shart");
//     } else {
//         alert("Muvaffaqiyatli");
//     }
// } catch (error) {
//     console.log(error.message);
// }
// 3-savol
// function checkType(num) {

//     if (Array.isArray(value)) {
//         console.log("Bu array");
//     } else if (typeof value === "string") {
//         console.log("Bu string");
//     } else if (typeof value === "number") {
//         console.log("Bu number");
//     } else if (typeof value === "boolean") {
//         console.log("Bu boolean");
//     } else if (typeof value === "object") {
//         console.log("Bu object");
//     } else {
//         console.log("Nomalum tur");
//     }
// }

// checkType(5)

// 4-savol
// const user = {
//     name: "Ali",
//     age: 25,
//     email: "ali@example.com",
//     isStudent: true
// };
// function registerUser(user) {
//     try {
//         if (typeof user.name !== 'string' || user.name.length < 3) {
//             throw new Error("Ism string bo'lishi va kamida 3 ta harfdan iborat bo'lishi kerak.");
//         } if (typeof user.age !== 'number' || user.age < 7) {
//             throw new Error("Yosh number bo'lishi va 7 yoki undan katta bo'lishi kerak.");
//         } if (typeof user.email !== 'string' || !user.email.includes('@') || !user.email.includes('.')) {
//             throw new Error("Email string bo'lishi va '@' hamda '.' belgilarini o'z ichiga olishi kerak.");
//         } if (typeof user.isStudent !== 'boolean') {
//             throw new Error("isStudent faqat boolean tipida bo'lishi kerak.");
//         }
//         console.log(`Ro'yxatdan muvaffaqiyatli o'tdingiz! Xush kelibsiz, ${user.name}!`);
//     } catch (error) {
//         console.log("Xatolik: " + error.message);
//     }
// }
// registerUser(user);




























