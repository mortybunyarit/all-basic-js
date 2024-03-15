/* จากข้อ 5 พบว่าเมื่อนำ function ที่เขียนไปใช้งานจริง user งงว่าต้องกรอกเลขรายการอาหารยังไง
PO จึงให้คุณปรับปรุง function เดิมของตัวเอง ให้เปลี่ยนไปเริ่มนับรายการแรก หรือ 'Steak' เป็น 1 และไล่ลำดับไปเรื่อยๆ
สมมติลูกค้าเลือกรายการอาหารที่ 1 ถึง 3 จะเห็น [ 'Steak', 'Burger', 'Pizza' ]

สังเกตง่ายๆ ว่าโปรแกรมทำงานถูกต้องหรือยัง จากการที่ลูกค้าเลือกเมนูไหน ต้องเห็นเมนูนั้นด้วย
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

console.log(chooseMenu(foods, 1, 4)); // [ 'Steak', 'Burger', 'Pizza', 'Sushi' ]
console.log(chooseMenu(foods, 2, 4)); // [ 'Burger', 'Pizza', 'Sushi' ]
console.log(chooseMenu(foods, 3, 4)); // [ 'Pizza', 'Sushi' ]
