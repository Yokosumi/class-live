import fridgeData from "./fridgeData.json" assert { type: "json" };

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

const featureValue = "LED Display";

const filteredFridge2 = fridgeData.filter((fridge) =>
  fridge.features.includes(featureValue)
);

// console.log(filteredFridge2);

const heightValue = 72;

const heightFridge = fridgeData.filter(
  (fridge) => fridge.dimensions.height >= heightValue
);

console.log(heightFridge);
