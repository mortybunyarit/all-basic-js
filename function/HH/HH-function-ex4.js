/* ให้ Declare ตัว Object ที่ชื่อ calculator เพื่อรวบรวมฟังก์ชันสองอัน 
คือ addTwoNumber และ subtractTwoNumber ให้อยู่ใน Object โดยที่
Object calculator จะมี 
1. Key เป็น addTwoNumber และมีค่าเป็นฟังก์ชัน addTwoNumber
2. Key เป็น subtractTwoNumber และมีค่าเป็นฟังก์ชัน subtractTwoNumber

สำหรับฟังก์ชัน addTwoNumber สามารถนำ code ในข้อ 1 มาใช้ได้

ส่วนฟังก์ชัน subtractTwoNumber ให้ declare ใหม่โดยใช้รูปแบบ Function Declaration
ฟังก์ชันนี้จะรับ Parameter 2 ตัวคือ firstNumber มีชนิดข้อมูลเป็น Number และ secondNumber มีชนิดข้อมูลเป็น Number
ฟังก์ชันนี้จะ Return ผลลัพธ์ออกมาเป็น ผลต่างของ firstNumber และ secondNumber
เช่น ถ้า Execute subtractTwoNumber(10, 5) จะได้ผลลัพธ์ออกมาเป็น 5

ต่อมาให้ Declare ตัว Variable ที่มีชื่อว่า addResult และ Assign ค่าของ addResult โดยมี Value เป็นผลลัพธ์จากการ Execute ฟังก์ชัน addTwoNumber ที่อยู่ใน Object calculator 
ให้กำหนด Parameter firstNumber เป็น 10 และ secondNumber เป็น 20
ให้แสดงค่าของ addResult ออกมาดูทางหน้าจอด้วย console.log ถ้าถูกต้องจะเห็น 30

สุดท้าย ให้ Declare ตัว Variable ที่มีชื่อว่า subtractResult และ Assign ค่าของ subtractResult โดยที่ Value เป็นผลลัพธ์จากการ Execute ฟังก์ชัน subtractTwoNumber ที่อยู่ใน Object calculator
ให้กำหนด Parameter firstNumber เป็น 3000 และ secondNumber เป็น 1000
ให้แสดงค่าของ subtractResult ออกมาดูทางหน้าจอด้วย console.log ถ้าถูกต้องจะเห็น 2000
*/

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function
let calculator = {
  addTwoNumber: function addTwoNumber(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  },
  subtractTwoNumber: function subtractTwoNumber(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  },
};

console.log(calculator.addTwoNumber(10, 5));
console.log(calculator.subtractTwoNumber(10, 5));

let addResult = calculator.addTwoNumber;
console.log(calculator.addTwoNumber(10, 20));

let subtractResult = calculator.subtractTwoNumber;
console.log(calculator.subtractTwoNumber(3000, 1000));
