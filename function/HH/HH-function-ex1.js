/* ให้ Declare ฟังก์ชัน addTwoNumber โดยใช้รูปแบบของ Function Declaration
ฟังก์ชันนี้จะรับ Parameter 2 ตัวคือ firstNumber มีชนิดข้อมูลเป็น Number และ secondNumber มีชนิดข้อมูลเป็น Number
ฟังก์ชันนี้จะ Return ผลลัพธ์ออกมาเป็น ผลรวมของ firstNumber และ secondNumber
ถ้า Execute addTwoNumber(10, 5) จะได้ผลลัพธ์ออกมาเป็น 15
*/

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function
function addTwoNumber(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addTwoNumber(10, 5));
