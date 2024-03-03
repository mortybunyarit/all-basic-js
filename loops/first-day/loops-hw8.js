/*
ให้นำโปรแกรมในข้อ 8 มาปรับปรุงเพิ่มเติม โดย 
1. declare function ชื่อว่า sumNumber ซึ่งมี parameter 1 ตัวคือ array
2. function นี้จะทำการบวกตัวเลขใน array และ return ค่าเป็นผลลัพธ์จากการบวกเลขทั้งหมด เช่น numbers จะ return ผลลัพธ์เป็น 55
3. เมื่อ execute ฟังก์ชันและ console.log จะเห็นตัวเลข 55 บนหน้าจอ
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumNumber([]) {
//   let sum = 0;
//   for (let i = 0; i <= 9; i++) {
//     sum += [][i];
//   }
//   return sum;
// }

// console.log(sumNumber([]));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumber(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumNumber(numbers));
