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

// 3. Arrow Functions(Advanced or ES5 ES6)

// let noop = () => {};

// let square = (n) => n * n;

// let add = (a, b) => a + b;
// That is why we use ARROW FUNCTION A LOT in react...

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

function doSum(a, b, ...numbers) {
  let size = numbers.length;
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

doSum(1, 2, 3, 4);
