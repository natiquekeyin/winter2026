// //noop() is a funciton that does accept any parameters neither it returns anything
// function noop() {}

// // square() function takes 1 parameter(n) and returns its square
// function square(n) {
//   return n * n;
// }

// // add() is a funciton that takes two parameters (a,b) and returns their sum
// function add(a, b) {
//   return a + b;
// }

// Types of functions
// 1. Function Declarations
// function abc(){  }

// 2. Function Expressions:

// let noop = function () {};

// let square = function (n) {
//   return n * n;
// };
// anonymous function!

// let add = function (a, b) {
//   return a + b;
// };

// 3. Arrow Functions(Advanced or ES5 ES6 - EcmaScript 5 & 6)

// let noop = () => {};

// let square = (n) => n * n;

// let add = (a, b) => a + b;
// That is why we use ARROW FUNCTION A LOT in react...
// Rather at few places we can ONLY use arrow functions in react!

// function myLog(n) {
//   console.log(n);
// }

// myLog("correct");
// myLog();
// myLog("also", "correct","something");

// Yes! "arguments" object that is a default object with functions in JS..

// myLog();
// myLog("hello", "a", "b", "c");
// myLog("keyin college", "world", "Keyin");

// function myLog(a) {
//   console.log(a, arguments.length, arguments[1]);
// }

// myLog("Keyin");
// myLog("Keyin", "College");
// myLog();
// arguments is a default object for every function
// function doSum() {
//   let size = arguments.length;
//   let sum = 0;
//   for (let i = 0; i < size; i++) {
//     sum = sum + arguments[i];
//   }
//   console.log(sum);
// }

// doSum();
// doSum(1, 2, 3);
// doSum(4, 5, 6, 7, 8, 9, 10);

// function doSum(a, b, ...numbers) {
//   let size = numbers.length;
//   let sum = 0;
//   for (let i = 0; i < size; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// doSum(1, 2, 3, 4);

// truthy and falsy

// Dealing with missing parameters!
// function updateScore(currentScore, value, bonus = 1) {
//   //   if (bonus) {
//   //     currentScore = currentScore + value * bonus;
//   //   } else {
//   //     currentScore = currentScore + value;
//   //   }
//   //   return currentScore;
//   //   return bonus ? currentScore + value * bonus : currentScore + value;
//   //   bonus = bonus || 1;
//   //   return currentScore + value * bonus;
//   //   return currentScore + value * (bonus || 1);
//   return currentScore + value * bonus;
// }

// console.log(updateScore(10, 3, 2)); //16
// console.log(updateScore(10, 3));

// let z = 10; //global variable!
// function doSomething() {
//   let x;
//   x = 10;
//   {
//     var y = 20;
//   }
//   console.log(x);
//   console.log(y);
// }

// doSomething();
// var x; //global variable
// function f() {
//   // var x; cannot take the value with it.. var x= 2NOT.. but it will only say var x
//   x = 2;

//   var y = x + 1;
//   console.log(y);
// }

// f();

xyz();

function xyz() {
  console.log("hello from XYZ");
}
