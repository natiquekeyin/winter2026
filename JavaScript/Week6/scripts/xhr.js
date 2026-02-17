let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  // step1: Create XHR object...
  let xhr = new XMLHttpRequest();

  //   Step2: Configure the request
  xhr.open("GET", "./data/test.txt");

  //   Step3: Action to take when request is completed

  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector("#output").innerText = this.responseText;
    } else {
      alert("File not found");
    }
  };

  //   Step4: Execute the request
  xhr.send();
});

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
  // Step1: Create XHR object
  let xhr = new XMLHttpRequest();
  //  Step2: Confiugre the object

  xhr.open("GET", "./data/user.json");

  //Step3: Action to take when data is received

  xhr.onload = function () {
    if (this.status === 200) {
      let user = JSON.parse(this.responseText);
      document.querySelector("#output").innerHTML = `<div><h3>ID:${user.id}</h3>
        <p>NAME:${user.name}</p><p>EMAIL:${user.email}</p>
        </div>`;
    } else {
      document.querySelector("#output").innerHTML =
        `<strong>Data not found</strong>`;
    }
  };

  //   Step4 :Execute the request
  xhr.send();
});

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  // Step1: Create XHR object
  let xhr = new XMLHttpRequest();
  //  Step2: Confiugre the object

  xhr.open("GET", "./data/users.json");

  //Step3: Action to take when data is received

  xhr.onload = function () {
    if (this.status === 200) {
      let output = "";
      let users = JSON.parse(this.responseText);

      users.forEach((user) => {
        output += `<div class="profile"><h5>ID:${user.id}</h5><p>NAME:${user.name}</p> <p>EMAIL:${user.email}</p> </div>`;
      });

      document.querySelector("#output").innerHTML = output;
    } else {
      document.querySelector("#output").innerHTML =
        `<strong>Data not found</strong>`;
    }
  };

  //   Step4 :Execute the request
  xhr.send();
});

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {
  // Step1: Create XHR object
  let xhr = new XMLHttpRequest();
  //  Step2: Confiugre the object

  xhr.open("GET", "https://api.github.com/users");

  //Step3: Action to take when data is received

  xhr.onload = function () {
    if (this.status === 200) {
      let users = JSON.parse(this.responseText);

      users.forEach((user) => {
        document.querySelector("#output").innerHTML +=
          `<div class="profile"><h4>${user.login}</h4> <img src="${user.avatar_url}" alt="Pic" width="100" class="profilePic"/>
          <a href = "${user.html_url}">More...</a></div>`;
      });
    }
  };

  //   Step4 :Execute the request
  xhr.send();
});
