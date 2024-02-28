/* ให้ comment เพื่อตอบคำถามว่า function ด้านล่างถูก Declare ด้วยวิธีใด
จากนั้นให้ refactor function ด้านล่างใหม่ในรูปแบบ function expression 
*/

//--------------------------------------------------------------

//Function นี้ถูก Declare ด้วยวิธี Function Declaration

// function addTwoNumber(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

let addTwoNumber = function (firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
};

addTwoNumber(1, 1);
