/** @format */

var screen1 = document.getElementById("text-screen");
var screen2 = document.getElementById("color-screen");
var colorText = document.getElementById("color-text");

let arr = [
  "Online store",
  "Online bookstore",
  "House shareing service",
  "Car sharing sevice",
  "Holiday themed website",
  "Political campaign site",
];

let project = Math.floor(Math.random() * arr.length);




screen1.innerHTML = arr[project];

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = "#" + randomColor;
    screen2.style.backgroundColor = color;
 
    colorText.innerText = color;
    