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

let dateString = `2026/01/27`;

let [year, , day] = dateString.split("/");
console.log(year, day);
