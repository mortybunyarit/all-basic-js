/* ให้เขียนโปรแกรมแสดงรายการอาหารที่ชอบ โดยแสดงข้อความ 'My favourite food is: foodName' 
โดยใช้ for loop
*/

const foods = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Tacos",
  "Chicken Curry",
  "Salad",
  "Ice Cream",
  "Pancakes",
  "Lasagna",
  "Sandwich",
  "Steak",
  "Fried Rice",
  "Chocolate Cake",
  "Shrimp Scampi",
  "Ramen",
  "Guacamole",
  "Burrito",
  "Waffles",
  "Caesar Salad",
];

for (let i = 0; i < foods.length; i++) {
  console.log(`My favorite food is: ${foods[i]}`);
}

// for (let i = 0; i < foods.length; i++) {
//   console.log("My favorite food is : " + foods[i] + ".");
// }
