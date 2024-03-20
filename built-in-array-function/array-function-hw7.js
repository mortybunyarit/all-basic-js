/* PO คนเดิมกลับมาให้ requirement ใหม่กับคุณ 
โดยขอให้คุณเขียน function ที่ admin ร้านจะสามารถเพิ่มเมนูใหม่ๆ เข้าไปยังตำแหน่งที่ต้องการได้ 

ตัวอย่างเช่น ตอนแรกร้านมีเมนูเรียงลำดับดังนี้ ["Coffee", "Green Tea", "Espresso", "Lemonade", "Smoothie"] 
ต่อมาเพิ่มเมนู "Hot Chocolate" เข้าไปก่อนเมนู "Green Tea"
จะได้เมนูใหม่ที่มีลำดับดังนี้ 

[
  'Coffee',
  'Hot Chocolate',
  'Green Tea',
  'Espresso',
  'Lemonade',
  'Smoothie'
]
*/
// ให้ลองคิดว่าต้องใส่ parameter อะไรบ้างเพื่อให้ function ทำงานได้ตาม requirement

// ข้อนี้ต้องใช้ .splice(): ใช้ในการเปลี่ยนแปลงเนื้อหาของอาร์เรย์โดยการลบหรือเพิ่มข้อมูล โดยสามารถระบุ
// index   และจำนวนข้อมูลที่ต้องการลบและสามารถแทรกข้อมูลใหม่เข้าไปได้

const beverages = ["Coffee", "Green Tea", "Espresso", "Lemonade", "Smoothie"];

let addBeverage = (array, newBeverage, position) => {
  array.splice(position, 0, newBeverage); //ตำแหน่ง,ลบ,เพิ่มอะไร
  return array;
};

console.log(addBeverage(beverages, "Hot Chocolate", 1));

// const beverages = ["Coffee", "Green Tea", "Espresso", "Lemonade", "Smoothie"];

// let addBeverage = (array) => {
//   return array.splice(1, 0, "Hot Chocolate");
// };

// console.log(addBeverage(beverages));
