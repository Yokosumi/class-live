import fridgeData from "./fridgeData.json" assert { type: "json" };

// manufacturer : X             ["samsung", "lg", "whirlpool"]
// fridges color : X            ["stainless steel", "black", "white"]
// has feature : "led display"
// height mindestens 72
// min temperature im fridge is at least 35
// average consumption is max 150 watts
// average rating is 3.5 or higher

const manufacturer = fridgeData.filter(
  (fridge) => fridge.manufacturer === "Samsung"
);

console.log(manufacturer);
