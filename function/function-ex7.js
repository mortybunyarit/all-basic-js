// function signUp() {
//   let usernameLength = username.length === 8;
//   let usernameNotConcistOfpassword = username.indexOf(password) === -1;

//   if (usernameLength && usernameNotConcistOfpassword) {
//     message = "ยินดีด้วย";
//   } else {
//     if (!usernameLength) {
//       message = "กรุณาตั้งชื่อที่มีความยาว 8 ตัวอักษรขึ้นไป";
//     } else if (!usernameNotConcistOfpassword) {
//       message += "กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย";
//     }
//   }
// }

// console.log(signUp("tee1234586", "tee123")); // ต้องเห็น 'กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย'
// console.log(signUp("thisshouldbetrue", "1233456")); // ต้องเห็น 'ยินดีด้วย คุณสมัครสมาชิกสำเร็จ'
// console.log(signUp("test", "test")); // ต้องเห็น 'กรุณาตั้งชื่อที่มีความยาว 8 ตัวอักษรขึ้นไป กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย'

/* ให้ debugging function ด้านล่าง ให้ทำงานได้ถูกต้อง
โดย function นี้มี requirement ดังนี้ 
1. username ที่ user กรอกต้องมี 8 ตัวอักษรขึ้นไป
2. username ต้องไม่มี password ปนอยู่ เช่น username คือ test จะใช้ password test ไม่ได้ 
*/

// let usernameLength = username.length >= 8;
// let usernameNotConcistOfpassword = username.indexOf(password) === -1;

// function signUp(username, password) {
//   if (username === usernameLength && username === usernameNotConcistOfpassword) {
//     return "ยินดีด้วย คุณสมัครสมาชิกสำเร็จ";
//   } else if (username !== usernameLength) {
//     return "กรุณาตั้งชื่อที่มีความยาว 8 ตัวอักษรขึ้นไป";
//   } else if (username !== usernameNotConcistOfpassword) {
//     return "กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย";
//   }
// }

// console.log(signUp("tee1234586", "tee123")); // ต้องเห็น 'กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย'
// console.log(signUp("thisshouldbetrue", "1233456")); // ต้องเห็น 'ยินดีด้วย คุณสมัครสมาชิกสำเร็จ'
// console.log(signUp("test", "test")); // ต้องเห็น 'กรุณาตั้งชื่อที่มีความยาว 8 ตัวอักษรขึ้นไป กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย'

function signUp(username, password) {
  let usernameLength = username.length >= 8;
  let usernameNotConcistOfpassword = username.indexOf(password) === -1;

  if (usernameLength && usernameNotConcistOfpassword) {
    return "ยินดีด้วย คุณสมัครสมาชิกสำเร็จ";
  } else if (!usernameLength && !usernameNotConcistOfpassword) {
    return "กรุณาตั้งชื่อที่มีความยาว 8 ตัวอักษรขึ้นไป กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย";
  } else if (!usernameLength) {
    return "กรุณาตั้งชื่อที่มีความยาว 8 ตัวอักษรขึ้นไป";
  } else if (!usernameNotConcistOfpassword) {
    return "กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย";
  }
}

console.log(signUp("tee1234586", "tee123")); // ต้องเห็น 'กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย'
console.log(signUp("thisshouldbetrue", "1233456")); // ต้องเห็น 'ยินดีด้วย คุณสมัครสมาชิกสำเร็จ'
console.log(signUp("test", "test")); // ต้องเห็น 'กรุณาตั้งชื่อที่มีความยาว 8 ตัวอักษรขึ้นไป กรุณาตั้งชื่อที่ไม่มีรหัสผ่านปนอยู่ด้วย'
