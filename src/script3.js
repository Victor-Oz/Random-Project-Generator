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
  "Network provider landing page",
  "Online bookstore checkout page",
  "House shareing service",
  "Farm Equipment Rental Service",
  "Computer Hardware Retailer",
  "Furniture manufacturing company",
  "Chicken Resturant menu page",
  "Online Boutique",
  "Record label site",
  "Coffee Shop Landing page",
  "Soft Drink Company",
  "Non-Profit Organisation ",
];

let project = Math.floor(Math.random() * arr.length);




screen1.innerHTML = arr[project];

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = "#" + randomColor;
    screen2.style.backgroundColor = color;
 
    colorText.innerText = color;
    