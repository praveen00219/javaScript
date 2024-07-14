// --------Cenverting Temprature : Celcius to Fehrenite------------
// let cel = 10;
// let fere = (cel * 9) / 5 + 32;
// // console.log(fere);

// ------ Practice for After increment/decrement and Before increment/decrement--------
// let a = 10;
// let b = 20;
// console.log(++a - --b + a++ + --b - a++ - b-- + b++ + --a + a--);

// ---------- How to take input from Browser in js--------------
// // const data = prompt("Give a number");
// // // alert(data);
// // console.log(data);
// // console.log(typeof data);

// ---------- How to take input from Terminal in js--------------
// function sum(num1, num2) {
//   return num1 + num2;
// }

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let num1, num2;

// readline.question("Give a number : ", function abc(num) {
//   num1 = parseInt(num); // Ensure num1 is a number
//   readline.question("Give another number : ", (num) => {
//     num2 = parseInt(num); // Ensure num2 is a number
//     readline.close();
//     console.log(`The sum is: ${sum(num1, num2)}`); // string literal
//     console.log("The sum is: " + sum(num1, num2)); // string concatenation
//   });
// });

// //----------- funcational scope | block scope | global scope-----------------
// // var has a functional scope
// // var variable have funcational scope
// // let variable have block scope

// // fun();
// // function fun() {
// //     console.log(v);
// //     if (true) {
// //         console.log(l); //
// //     }
// //     console.log(v); // 78
// //     console.log(l); // Refrence Error
// // }
// // console.log(v)
// // var v = 78;
// // var v = 89;
// // let l = 89;

// try {
//     y = 90;
// }catch (e) {
//     console.log(e.message); // ReferenceError: y is not defined
// }
// console.log(y);
// // var a; // => declaration of variable

// //-------- you can use var variables before its declaration but value of that variable will be undefined---------
// //-------- you can't use let,const before its declaration-------------
// // function abc(){
// //     var g = 34;
// //     function def(){
// //         console.log(g); //
// //     }
// //     return def;
// // }
// // const z = abc();
// // // z();
// y = 78;
// console.log(y);

//----------- "use strict";-----------------
//------------ "use strict"; // => it doesn't mean that now its strict type langues---------------
// x = 3.14;
// console.log(x);

// function abc() {
//   "use strict";
//   y = 678;
//   console.log(y);
// }
// try {
//   abc();
// } catch (e) {
//   console.log(e.message);
// }
// z = 67;
// console.log(z);
