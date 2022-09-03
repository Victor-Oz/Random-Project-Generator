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
  "Network provider",
  "Online bookstore ",
  "House shareing service",
  "Farm Equipment maintainance shop",
  "Computer Hardware Retailer",
  "Furniture manufacturing company",
  "burger resturant",
  "Boutique",
  "Record label ",
  "Coffee Shop ",
  "Soft Drink Company",
  " female Non-Profit Organisation ",
  " male Non-Profit Organisation ",
  "military gear manufacturing company",
  "local cusine resturant",
  "footware store",
  "comic bookstore ",
  "pizza Shop ",
];
let project2 = Math.floor(Math.random() * brandingArray.length);

brandingTxtScreen.innerHTML = brandingArray[project2];
