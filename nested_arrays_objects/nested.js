import fridgeData from "./fridgeData.json" assert { type: "json" };
console.log(fridgeData[0].manufacturer);

// manufacturer : X             ["samsung", "lg", "whirlpool"]
// fridges color : X            ["stainless steel", "black", "white"]
// has feature : "led display"
// height mindestens 72
// min temperature im fridge is at least 35
// average consumption is max 150 watts
// average rating is 3.5 or higher
const manufacturerValue = "LG";
// const filteredFridgesData = fridgeData.filter(
//   (fridge) => fridge.manufacturer === manufacturerValue
// );

// console.log(filteredFridgesData);
// const colorValue = "White";

// console.log(filteredFridgesData);

const filterValue = "manufacturer";
function fridgeFilter(filterKeyword, filterValue) {
  return fridgeData.filter((fridge) => fridge[filterKeyword] === filterValue);
}

const result = fridgeFilter(filterValue, manufacturerValue);

// console.log(result);
