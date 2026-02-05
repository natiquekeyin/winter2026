// Step 1 - get the reference of the picture in a javascript variable...
let pic = document.querySelector("#pic1");

// Step 2 - allocate event to this picture

pic.addEventListener("click", function () {
  let h = document.querySelector("h1");
  h.innerText = "KEYIN COLLEGE";
  let pic2 = document.querySelector("#pic2");
  pic2.src = "./images/image3.jpg";
});

let c1 = document.querySelector("#create");
c1.addEventListener("click", function () {
  let newH = document.createElement("h3");
  newH.innerText = "I am a new H3";
  document.querySelector("#top").appendChild(newH);
  let newPic = document.createElement("img");
  newPic.src = "./images/image1.jpg";
  newPic.width = "300";
  newPic.alt = "Something";
  document.querySelector("#output").appendChild(newPic);
});
