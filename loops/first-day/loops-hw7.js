/*
จากข้อมูลด้านล่าง 
1. ให้หาผลรวมของตัวเลขทั้งหมดใน array 
2. ให้ console.log ค่าออกมาทางหน้าจอ หากทำถูกต้องจะเห็นตัวเลข 55
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

// แก้เงื่อนไขในการวนลูป
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
