let cat = document.querySelector("#cat");
cat.addEventListener("click", function (evt) {
  console.log("Cat clicked!!");
  evt.stopPropagation();
});

let body = document.body;
body.addEventListener("click", function () {
  console.log("Body clicked");
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
