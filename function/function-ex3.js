/* ให้ประกาศ function ชื่อ isValidLogin
function นี้รับ argument 2 ตัวคือ username กับ password
ถ้า user พิมพ์ username และ password ถูก จะเห็นข้อความ 'Login successfully'
ถ้า user พิมพ์ username หรือ password ผิด จะเห็นข้อความ 'Wrong username or password, please try again.' 
*/

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function
const correctUsername = "Morty";
const correctPassword = "123456789";

function isValidLogin(username, password) {
  if (username === correctUsername && password === correctPassword) {
    return "Login successfully.";
  } else {
    return "Wrong username or password, please try again.";
  }
}

console.log(isValidLogin("Morty", "123456789"));
console.log(isValidLogin("Marty", "123456789"));
console.log(isValidLogin("Morty", "555555"));
