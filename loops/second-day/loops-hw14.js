/* ให้ปรับปรุง function ด้านล่างให้ทำงานได้ถูกต้องตาม requirement
1. เมื่อ function นี้ทำงานจะแสดงตารางแม่สูตรคูณออกมา เช่น multiplicationTable(2, 3) จะต้องเห็น 

แม่สูตรคูณของ 2
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
2 X 11 = 22
2 X 12 = 24
---------------
แม่สูตรคูณของ 3
3 X 1 = 3
3 X 2 = 6
...
3 X 12 = 36
---------------

โดยจะต้องมีเส้น --------------- คั่นก่อนขึ้นแม่สูตรคูณถัดไปด้วย
*/

let startNumber = 2;
let endNumber = 3;
// เขียน function ที่นี่ได้เลยจ้า
function multiplicationTable(startNumber, endNumber) {
  for (let i = startNumber; i <= endNumber; i++) {
    console.log(`แม่สูตรคูณของ ${i}`);
    for (let j = 1; j <= 12; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
    console.log(`---------------`);
  }
}

multiplicationTable(2, 3);
