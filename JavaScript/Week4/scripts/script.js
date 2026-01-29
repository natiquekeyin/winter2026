// Practice of String object functions!

// let str = "The best sound in this world., is your name";
// // Let's write a function that will add a period at the end of a string
// function addPeriod(s) {
//   //   return s + ".";
//   //   if (s.endsWith(".")) {
//   //     return s;
//   //   } else {
//   //     return s + ".";
//   //   }
//   //   return s.endsWith(".") ? s : s + ".";
//   //   return s.endsWith(".") ? s : `${s}.`;
//   let lastPos = s.length - 1;
//   //   return s.charAt(lastPos) === "." ? s : `${s}.`;
//   return s[lastPos] === "." ? s : `${s}.`;
// }

// console.log(addPeriod("hello."));
// console.log(addPeriod(str));

// index method
// let position = [43.1234, -79.1234];
// // let lat = position[0];
// // let lng = position[1];
// // console.log(lat, lng);

// // Destructuring method
// let [lat, lng] = position;

// let dateString = `2026/01/27`;

// let [year, month, day] = dateString.split("/");
// console.log(year, month, day);

// let nums = [1, 2, 3, 4, 5];
// Read each value from nums and mulitply it with 3 and store it in newNums
// let newNums = [];
// By using for loop
// for (let i = 0; i < nums.length; i++) {
//   let value = nums[i];
//   value = value * 3;
//   newNums.push(value);
// }

// by using forEach()

// nums.forEach(function (value) {
//   value *= 3;
//   newNums.push(value);
// });

// let newNums = nums.map(function (value) {
//   return value * 3;
// });
// let newNums = nums.map((value) => value * 3);
/*
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.
*/
// console.log(nums, newNums);

// filter function!

// let list = [15, 12, 33, 14];
// let newList = list.filter((value) => value <= 15);
// let newList2 = list.map((value) => value <= 15);
// console.log(list, newList, newList2);

let fruits = ["apple", "banana", "orange", "abc", "abcdef"];
let newFruits = fruits.map((fruit) => fruit.startsWith("b"));
let newFruits2 = fruits.filter((fruit) => fruit.startsWith("b"));
let newFruits3 = fruits.every((fruit) => fruit.startsWith("b"));
console.log(fruits);
console.log(newFruits);
console.log(newFruits2);
console.log(newFruits3);
