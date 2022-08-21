/** @format */

var uiTxtScreen = document.getElementById("text-screen");
var brandingTxtScreen = document.getElementById("text-screen2");

let uiArray = [
  "Online store ",
  "Online bookstore ",
  "House shareing service ",
  "Car sharing sevice",
  "Holiday themed website",
  "Political campaign site",
  "Network provider ",
  "Online bookstore ",
  "movie streaming service",
  "Farm Equipment Rental Service",
  "Computer Hardware Retailer",
  "Furniture manufacturing company",
  "Chicken Resturant",
  "Online Boutique",
  "Record label site",
  "Coffee Shop",
  "Soft Drink Company",
  "Non-Profit Organisation ",
];

let project = Math.floor(Math.random() * uiArray.length);

uiTxtScreen.innerHTML = uiArray[project];

let brandingArray = [
  "fashion",
  "bookstore",
  "Real estate company",
  "Car sharing sevice",
  "Holiday Resort",
  "Political party ",
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
let project2 = Math.floor(Math.random() * brandingArray.length);

brandingTxtScreen.innerHTML = brandingArray[project2];
