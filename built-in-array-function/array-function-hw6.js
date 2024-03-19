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

let chooseMenu = (array, begin, end) => {
  return array
    .slice(begin - 1, end) // .slice(): ใช้ในการสร้างอาร์เรย์ใหม่โดยส่วนของอาร์เรย์ที่ต้องการ โดยไม่เปลี่ยนแปลงอาร์เรย์เดิมโดยเลือกส่วนระหว่าง index ที่ 0 เพราะเราใช้ -1 จนถึงตัวสุดท้ายที่เราเลือกครับ
    .map((item) => `${index + begin}. ${item}`); // .map()คือการเปลี่ยนค่าทั้งหมดใน array และ ให้ index แทนด้วย begin ที่เพิ่มขึ้นมาหนึ่ง และตามด้วยชื่อ item
};

console.log(chooseMenu(foods, 1, 4)); // [ '1. Steak', '2. Burger', '3. Pizza', '4. Sushi' ]
console.log(chooseMenu(foods, 2, 4)); // [ '1. Burger', '2. Pizza', '3. Sushi' ]
console.log(chooseMenu(foods, 3, 4)); // [ '1. Pizza', '2. Sushi' ]

// let chooseMenu = (array, begin, end) => {
//   return array.slice(begin - 1, end).map((item, index) => `${index + begin}. ${item}`);
// };

// console.log(chooseMenu(foods, 1, 4)); // [ '1. Steak', '2. Burger', '3. Pizza', '4. Sushi' ]
// console.log(chooseMenu(foods, 2, 4)); // [ '1. Burger', '2. Pizza', '3. Sushi' ]
// console.log(chooseMenu(foods, 3, 4)); // [ '1. Pizza', '2. Sushi' ]
