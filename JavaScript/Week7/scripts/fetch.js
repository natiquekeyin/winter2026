// fetch api ONLY works in browsers
// console.log(fetch("./data/test.txt"));

// fetch("./data/test.txt")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {});

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  fetch("./data/test.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("#output").innerText = data;
    })
    .catch(() => {});
});

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {});

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {});

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {});
