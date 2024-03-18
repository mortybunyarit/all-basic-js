/* ให้นำ function ในข้อ 2 มาปรับปรุง ให้ทำงานตามเดิม 
แต่เปลี่ยนไปใช้ built-in array function ที่ชื่อว่า .indexOf() แทน
*/

const arrayOfUsername = ["aliza", "Paul187z", "Biliblliboom", "Omega-13579"];
let username1 = "aliza"; // เมื่อ execute function จะเห็นข้อความ 'The username is not valid because it has already been used.'
let username2 = "paul"; // เมื่อ execute function จะเห็นข้อความ 'You can use this username.'
let username3 = "omega-13579"; // เมื่อ execute function จะเห็นข้อความ 'The username is not valid because it has already been used.'

// let applyWebsiteMember = (arrayOfUsername, username) => {
//   if (arrayOfUsername.indexOf(username.toLowerCase()) !== -1) {
//     return "The username is not valid because it has already been used.";
//   } else {
//     return "You can use this username.";
//   }
// };

// console.log(applyWebsiteMember(arrayOfUsername, username1));
// console.log(applyWebsiteMember(arrayOfUsername, username2));
// console.log(applyWebsiteMember(arrayOfUsername, username3));

let applyWebsiteMember = (arrayOfUsername, username) => {
  // แปลงชื่อทั้งหมดใน arrayOfUsername เป็นตัวพิมพ์เล็ก
  let lowerCaseUsernames = arrayOfUsername.map((username) =>
    username.toLowerCase()
  );

  // ใช้ indexOf() เพื่อตรวจสอบว่าชื่อที่รับมาอยู่ใน arrayOfUsername หรือไม่
  if (lowerCaseUsernames.indexOf(username.toLowerCase()) !== -1) {
    return "The username is not valid because it has already been used.";
  } else {
    return "You can use this username.";
  }
};

console.log(applyWebsiteMember(arrayOfUsername, "aliza")); // 'The username is not valid because it has already been used.'
console.log(applyWebsiteMember(arrayOfUsername, "paul")); // 'You can use this username.'
console.log(applyWebsiteMember(arrayOfUsername, "omega-13579")); // 'The username is not valid because it has already been used.'
