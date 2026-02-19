// the async functions actually return promise!

// async function myFunction() {
//   return "hello keyin college";
// }

// console.log(
//   myFunction().then((message) => {
//     console.log(message);
//   }),
// );

// myFunction().then((message) => {
//   console.log(message);
// });

// async function fetchData() {
//   let p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data Loaded");
//     }, 3000);
//   });

//   console.log("fetching data");
//   let result = await p;
//   console.log(result);
// }

// fetchData();
// console.log("new line 1");
// console.log("new line 2");

// async function loadText() {
//   let response = await fetch("./data/user.json");
//   let data = await response.json();
//   console.log(data);
// }

// loadText();

/* 
function () {
  fetch("./data/test.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("#output").innerText = data;
    })
    .catch(() => {});
});
*/
async function bringText() {
  let response = await fetch("./data/test.txt");
  let data = await response.text();
  //   console.log(data);
  document.querySelector("#output").innerText = data;
}

bringText();

// For practice, take the "fetch.js" script from Week7, and CONVERT all normal functions into async/await functions and achieve the same result....
// If you are done with the practice with Dr. Aini...Please do complete this part there...

// CONVERT WEEK7 DOCUMENT INTO ASYNC/AWAIT FUNCTIONS
