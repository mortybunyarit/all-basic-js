/* จาก requirement ในข้อ 3 เมื่อปล่อยให้ user ใช้งานแล้วพบว่ามีปัญหาคือ user ไม่รู้ว่าตัวเองพิมพ์ username หรือ password ผิด
ให้ประกาศ function ชื่อ isValidLogin อีกครั้ง โดยแก้ pain point ของ user 
ถ้า user พิมพ์ username และ password ถูก จะเห็นข้อความ 'Login successfully'
ถ้า user พิมพ์ username ผิด จะเห็นข้อความ 'Wrong username, please try again.'
ถ้า user พิมพ์ password ผิด จะเห็นข้อความ 'Wrong password, please try again.'
*/

// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function

const correctUsername = "Morty";
const correctPassword = "123456789";

let isValidLogin = (username, password) => {
  if (username === correctUsername && password === correctPassword) {
    return "Login successfully.";
  } else if (username !== correctUsername) {
    return "Wrong username, please try again.";
  } else if (password !== correctPassword) {
    return "Wrong password, please try again.";
  }
};

console.log(isValidLogin("Morty", "123456789"));
console.log(isValidLogin("mary", "123456789"));
console.log(isValidLogin("Morty", "55555"));
