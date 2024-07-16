import deployNumber from "./fb_upload.js";
import { GifsPhoneNumber } from "./dictionary.js";
console.log("lolz2");
document.getElementById("mobileForm").addEventListener("submit", (e) => {
  e.preventDefault();
  var formdata = new FormData(e.target);
  console.log(formdata);
  var numbero = Object.fromEntries(formdata);
  console.log(numbero);
  deployNumber(numbero.phone);
  alert("Submitted!");
});

//HEARTS!
const body = document.querySelector("body");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  body.appendChild(heart);
}
setInterval(createHeart, 100);

setInterval(function name(params) {
  var heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 200) {
    heartArr[0].remove();
  }
  //console.log(heartArr);
}, 100);


// const addRandomGif = () => {
//   const randomIndex = Math.floor(Math.random() * GifsPhoneNumber.length);
//   const randomGifUrl = GifsPhoneNumber[randomIndex];

//   const newImg = document.getElementById("img1");
//   var gif = document.createElement("img");
//   gif.classList.add("gif");
//   gif.src = randomGifUrl;
//   newImg.innerHTML = "";
//   newImg.appendChild(gif);
// };

// // Call addRandomGif every 1000 milliseconds (1 second)
// setInterval(addRandomGif, 1000);

