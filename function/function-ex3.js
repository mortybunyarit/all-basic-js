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
    console.log("Login successfully.");
  } else {
    console.log("Wrong username or password, please try again.");
  }
}

isValidLogin("Morty", "123456789");
isValidLogin("Marty", "123456789");
isValidLogin("Morty", "555555");
