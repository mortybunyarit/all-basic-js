/* คุณได้รับ requirement ให้เขียน function เพื่อเอาไปใช้กับร้านอาหาร
function นี้จะแสดงรายการอาหารให้ลูกค้าเลือกบนหน้าจอ
รายการอาหารจะเริ่มนับที่ index 0 และข้อมูลที่ index 0 คือ 'Steak'
สมมติลูกค้าเลือกรายการอาหารที่ 0 ถึง 3 จะเห็น [ 'Steak', 'Burger', 'Pizza' ]
*/

const foods = [
  "Steak",
  "Burger",
  "Pizza",
  "Sushi",
  "Pasta",
  "Tacos",
  "Salad",
  "Ramen",
  "Curry",
  "Sandwich",
  "Paella",
  "Dumplings",
  "BBQ Ribs",
  "Falafel",
  "Lasagna",
  "Chow Mein",
  "Fish and Chips",
  "Burrito",
  "Quiche",
  "Chicken Wings",
];

let chooseMenu = (array, begin, end) => {};

console.log(chooseMenu(foods, 0, 3)); // [ 'Steak', 'Burger', 'Pizza' ]
console.log(chooseMenu(foods, 1, 3)); // [ 'Burger', 'Pizza' ]
console.log(chooseMenu(foods, 2, 3)); // [ 'Pizza' ]
