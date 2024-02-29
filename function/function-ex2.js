/* ให้ประกาศ function ชื่อ greeting
function นี้รับ argument 1 ตัวคือ username
ถ้า user พิมพ์ username เข้ามา สมมติ username คือ morty เมื่อ function ทำงาน ต้องเห็นข้อความ 'สวัสดี morty! ยินดีต้อนรับเข้าสู่เว็บไซต์'
ถ้า user ไม่ได้พิมพ์ username เข้ามา เมื่อ function ทำงาน ต้องเห็นข้อความ 'สวัสดีคนที่เราไม่รู้ว่าคือใคร แต่ยังไงก็ยินดีต้อนรับนะ'
*/
// แก้ตรง return ให้ return ค่าออกมา ไม่ควรใช้ console.log แสดงค่าใน function

function greeting(username) {
  if (username === "Morty") {
    console.log("สวัสดี Morty! ยินดีต้อนรับเข้าสู่เว็บไซต์");
  } else if (username !== "Morty") {
    console.log("สวัสดีคนที่เราไม่รู้ว่าใคร แต่ยังไงก็ยินดีต้อนรับนะ");
  }
}

greeting("Morty");
greeting("Milly");
