window.addEventListener("DOMContentLoaded", function () {
  let cat = document.querySelector("#cat");
  cat.addEventListener("click", function (evt) {
    console.log("Cat clicked!!");
    evt.stopPropagation();
  });

  let body = document.body;
  body.addEventListener("mousemove", function (evt) {
    document.querySelector("#xPos").innerText = evt.clientX;
    document.querySelector("#yPos").innerText = evt.clientY;
  });

  let btn = document.querySelector("#btn");

  btn.addEventListener("click", function () {
    cat.src = nextCatImageUrl();
  });

  let newCatUrl = 0;
  function nextCatImageUrl() {
    if (newCatUrl === cats.length - 1) {
      newCatUrl = 0;
    }
    return cats[newCatUrl++];
  }

  let btn1 = document.querySelector("#btn1");
  btn1.addEventListener("click", function () {
    btn1.remove();
    let ol = document.createElement("ol");
    let i = 1;
    cats.forEach((url) => {
      let li = document.createElement("li");
      // li.innerText = url;
      li.innerHTML = `<a href="${url}">URL ${i++}</a>`;
      ol.appendChild(li);
    });

    document.querySelector("#output").appendChild(ol);
  });

  // timer functions

  setTimeout(function () {
    // cat.src = nextCatImageUrl();
    cat.remove();
  }, 3000);

  setInterval(function () {
    cat.src = nextCatImageUrl();
  }, 1000);
});
