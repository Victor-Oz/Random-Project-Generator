/** @format */

var uiTxtScreen = document.getElementById("text-screen");
var brandingTxtScreen = document.getElementById("text-screen2");

let uiArray = [
 "Design a mobile app for a restaurant",
  "Create a website for a non-profit organization",
  "Redesign a popular e-commerce website",
  "Design a booking platform for travel accommodation",
  "Create a dashboard for a data visualization tool",
  "Design a messaging app for a specific target audience",
  "Redesign the user interface for a social media platform",
  "Create an online education platform",
  "Design a calendar app for productivity",
  "Create a chatbot for customer support",
  "Redesign the user interface for a fitness app",
  "Design an e-commerce platform for luxury goods",
  "Create a weather app with personalized features",
  "Design an online voting platform",
  "Redesign a transportation app for a major city",
  "Create a recipe-sharing platform",
  "Design a job search website for a specific industry",
  "Create a task management app for remote teams",
  "Design a music streaming platform",
  "Redesign the user interface for a budgeting app",
  "Create an online marketplace for handmade goods",
  "Design a news aggregator website or app",
  "Create a personalized shopping assistant",
  "Design a social network for a specific hobby or interest",
  "Redesign the user interface for a healthcare app",
  "Create a productivity app for students",
  "Design an online portfolio platform for creatives",
  "Create a habit-tracking app",
  "Design a fashion e-commerce platform",
  "Redesign the user interface for a mobile banking app",
  "Create an online fitness class platform",
  "Design a travel planning app",
  "Create a language learning app",
  "Design an event planning platform",
  "Redesign the user interface for a weather app",
  "Create a mental health app",
  "Design a ride-sharing app",
  "Create a tool for managing personal finances",
  "Design an augmented reality experience",
  "Redesign the user interface for a podcast app",
  "Create an online art gallery",
  "Design a meditation app",
  "Create an app for finding and booking fitness classes",
  "Design a real estate search platform",
  "Redesign the user interface for a personal assistant app",
  "Create a virtual wardrobe app",
  "Design a delivery service app",
  "Create a time management tool",
  "Design a fashion rental platform",
  "Redesign the user interface for a shopping app",
  "Create an online support community for a specific health condition",
  "Design a social impact platform for volunteering and activism"
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
