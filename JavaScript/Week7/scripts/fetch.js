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
btn2.addEventListener("click", function () {
  fetch("./data/user.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#output").innerHTML =
        `<div class="profile"><p>${data.id}</p><p>${data.name}</p><p>${data.age}</p><p>${data.email}</p></div>`;
    });
});

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  fetch("./data/users.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((user) => {
        document.querySelector("#output").innerHTML +=
          `<div class="profile"><h1>${user.id}</h1><p>${user.name}</p><p>${user.age}</p><p>${user.email}</p></div>`;
      });
    });
});

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {
  fetch("https://api.github.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((user) => {
        document.querySelector("#output").innerHTML += `<div class="profile">
          <h1>
          ${user.login}</h1>
          <img src = "${user.avatar_url}" class="profilePic" alt="Profile"/>
          <a href = "${user.html_url}">${user.html_url}</a>         
          </div>`;
      });
    });
});

let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((responses) => {
      return responses.json();
    })
    .then((data) => {
      data.forEach((user) => {
        document.querySelector("#output").innerHTML +=
          `<div class="profile"><h1>ID:${user.id}</h1><p>Name:${user.name}</p><p>Email:${user.email}</p>
          <p>Address: Street${user.address.street}</p><p>Geo:${user.address.geo.lat}</p><p><a href="http://www.${user.website}">${user.website}</a>
          </div>`;
      });
    });
});
