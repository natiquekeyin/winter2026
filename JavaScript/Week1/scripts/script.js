// // /*
// // Name: Keyin College
// // Studnet reg ID: 12345
// // Assignment: Practice Set 1 / QAP1 /Sprint 1/ Final Sprint
// // Date: January 12,2026
// // */

// // // console.log("Hello Keyin College");
// // // console.log("This is a new line");

// // // let customerCount = 10;
// // // let cUstomerCount = 20;

// // // let x = 10;
// // // let X = 20;

// // let customerCount = 10; // camelCase JS Prefers this!
// // let CustomerCount = 10; // PascalCase
// // let customer_count = 10; // snake_case
// // // let customer-count=10;// kebab-case

// // let x = 10;
// // let y = 20;

// // //this is single line comment
// // /* this is a multiline
// // comment going to diffent
// // lines */

// // console.log(x + y);
// // console.log("Hello Keyin College");

// // {
// //   console.log("inside block");
// //   console.log("another inside block");
// // }

// // if (x < 10) {
// //   console.log("X is less than 10");
// //   console.log("You are studying hard");
// // } else {
// //   console.log("hello world i am else");
// // }

// // function doSomething() {
// //   console.log("This is do something functions");
// // }

// // doSomething();

// // let x = 10;
// // let name = "Alice";

// // int x = 20; (int means it is going to be an integer ONLY)
// // char y = 'A'; (i can only store a character in y now)
// // STRONGLY TYPED LANGUAGUES

// // let x = 10;
// // x = "Alice";
// // x = true;
// // x = 2.3;
// // Loosely Typed Languages
// // typeof ???

// // let x;
// // console.log(typeof x);
// // x = 10;
// // console.log(typeof x);
// // x = "Alice";
// // console.log(typeof x);
// // x = true;
// // console.log(typeof x);

// // var x = 10;
// // const y = 20;

// // let _x = 10;
// // let x = 10;
// // let $x = 10;
// // let 4x = 3; WRONG

// // let let=10;
// // because let is reserved or keyword of JS langauge!

// // let const = 3;

// // let function = 3; funciton is  a reserved or keyword or JS

// let x = function () {
//   console.log("hello");
// };

// console.log(typeof x); //function/object data type
// //

// let today = new Date();
// console.log(today);
// console.log(typeof today);

// let x;
// console.log(typeof x);

// x = null;
// console.log(typeof x);

// let x = "hello";
// console.log(typeof x);

// x = "123";
// console.log(typeof x);

// x = "123";
// console.log(typeof x);

// let x = 123 + 4 + 5 + 6;
// console.log(x);

// let d = null;

// console.log(d);
// console.log(typeof d);

// let x = 11;
// console.log(x % 2);

// // console.log(10%2)
// x = 12;
// if (x % 2 == 0) {
//   console.log("This is even number");
// }

// let x = 1;
// // x = x + 5;
// x += 5;
// console.log(x);

// ++ is called "increment operator" -- is called "decrement operator"

// let x = 1;
// x++;
// console.log(x);

// let y = 1;
// y--;
// console.log(y);

// Increment/decrement operators are itself of two types:
// Pre-Incremen/decrement & Post-increment/decrement

// let x = 1;
// // console.log(x++); //post increment
// console.log(++x);
// console.log(x);

// let x = 1;
// console.log(x++); //1  int: 2
// console.log(++x); //3  int: 3
// console.log(x++); //3  int:4
// console.log(x); //4     int:4

// let z = 10;
// console.log(z--); //10
// console.log(--z); //8
// console.log(z--); // 8
// console.log(z); //7
// console.log(--z); //6

// let age = 18;
// // Coercion: Converting the type from either side and then comparing...
// // === .. is called "Strict Equality operator", used for saving from coercion...
// // N.B: ALWASY USE === IN JS, TO AVOID COERCSION.....
// if (age === "18") {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// Unary Operators: An operator that requires ONLY one operand! x++, --x, !x,

// Binary Operators: Opertors that require 2 operands ..  a+ ,NOT.. 5+5, 2+x,

// Ternary operator(conditional operator): Operator that requires 3 operands!
//  ? :
// Syntax:
// operand1 ? operand2 : operand3
// condition ? value_if_true: value_if_false

// let age = 13;
// age > 15 ? console.log("Welcome") : console.log("Not allowed");

// let x = 10;
// let message;

// message =
//   x < 10 ? "Number is less than 10" : "Number is greater than or equal to 10";

// if (x < 10) {
//   message = "Numbe is less than 10";
// } else {
//   message = "Number is greater then or equal to 10";
// }
// console.log(message);

// Strings can be " ", ' ' , ` `

// let name = "Alice";
// let age = 20;
// // console.log("Welcome " + name + " your age is " + age);
// console.log(`Welcome ${name} your age is ${age}`); //f trings in python...back ticks...
// // whe we use backticks ` ` , the string is called template literals...

// what is an Expression?
//  An expression is a statement that evalues to a value...
// let y = 5;

// let x = y + 10; //equation when there is an equal sign..

// x will x have a value after execution?? "x" is one expression

// y+10... does it also a value? y+10 is another expressions

// let age = 18;
// // age > 15; // Is this an expression
// // Yes this is an expression.... "false"
// console.log(age > 15);

// if(x<10){

// }

// Sequential Flow
// console.log("hello");
// console.log("world");
// console.log("something");
// console.log("keyin college");

// COnditional:

// let age = 10;
// console.log("Hello to my  program");
// if (age > 18) {
//   console.log("Welcome to the classs");
// } else {
//   console.log("you are underage");
// }

// Looping:
//  for in in range(1,10): PYTHON

// for(initialization; condition; increment/decrement) { ...body of the loop   }

// for (let i = 0; i < 3; i++) {
//   console.log("Hello", i);
// }

// Step1: initialization occurs: i = 0;
// Step2: Condition is tested 0<3 ? T Or F?
// Step3: If condition is true .. execute the body of the loop
// Step4: After execution, goto inc/dec..
// Step5: Condition is tested again...1 <3 ? T/F?, if Condition is true..goto Step3
// Step6: When condition is false, exit the loop...

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 1 2 3...10...
// // 10 9 8 7 6 5 .. 1???

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

function abc() {
  console.log("Keyin College");
  console.log("End of function");
}

console.log("I am starting of the program");
console.log("I am second line");
abc();
console.log("I am after first call of abc");
abc();
console.log("I am after second call abc");
