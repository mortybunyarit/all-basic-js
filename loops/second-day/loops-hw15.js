/* ให้เขียนโปรแกรมตาม requirement ต่อไปนี้ 
1. declare function ชื่อว่า findTopSaleMenu ซึ่งมี parameter 1 ตัวคือ array
2. function นี้จะทำการตรวจสอบว่าเมนูใดในร้านขายได้เยอะที่สุด (สังเกตจำนวนที่ key ที่ชื่อว่า amount)
3. เมื่อ execute function จะเห็นข้อความ 'Iced Coffee is the most popular menu. We sold 120 cups of it'

4. declare function ชื่อว่า findMinSalesMenu ซึ่งมี parameter 1 ตัวคือ array
5. function นี้จะทำการตรวจสอบว่าเมนูใดในร้านขายได้น้อยที่สุด (สังเกตจำนวนที่ key ที่ชื่อว่า amount)
6. เมื่อ execute function จะเห็นข้อความ 'Soda is the least popular menu item. We sold 20 cups of it.'
*/

const beverageData = [
  { id: 1, name: "Iced Coffee", amount: 120, price: 129 },
  { id: 2, name: "Green Tea", amount: 100, price: 145 },
  { id: 3, name: "Soda", amount: 20, price: 79 },
  { id: 4, name: "Fruit Smoothie", amount: 50, price: 89 },
  { id: 5, name: "Seasonal Special Tea", amount: 50, price: 219 },
  { id: 6, name: "Iced Latte", amount: 110, price: 129 },
  { id: 7, name: "Cappuccino", amount: 100, price: 119 },
  { id: 8, name: "Americano", amount: 40, price: 119 },
  { id: 9, name: "Chocolate Shake", amount: 50, price: 129 },
  { id: 10, name: "Thai Tea Ice Cream", amount: 70, price: 149 },
];

// เขียน function ตรงนี้ได้เลย
let findTopSaleMenu = (array) => {
  let top = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].amount > top.amount) {
      top = array[i];
    }
  }
  return `${top.name} is the most popular menu. We sold ${top.amount} cups of it. `;
};

let findMinSalesMenu = (array) => {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].amount < min.amount) {
      min = array[i];
    }
  }
  return `${min.name} is the least popular menu item. We sold ${min.amount} cups of it. `;
};

console.log(findTopSaleMenu(beverageData));
console.log(findMinSalesMenu(beverageData));
