/* มอนตี้ได้รับ requirement ให้เขียนโปรแกรมแจ้งเตือน โดย:
หากสภาพอากาศมีแนวโน้มว่าฝนจะตก จะต้องแสดงข้อความ 'มีแนวโน้มว่าฝนจะตก กรุณาพกร่ม'
หากสภาพอากาศไม่มีแนวโน้มว่าฝนจะตก จะต้องแสดงข้อความ 'อากาศแจ่มใสดี ไม่ต้องพกร่ม'
ให้เขียน code เพื่อให้โปรแกรมทำงานได้ตาม requirement
*/
let rainy = false;

if (rainy) {
  console.log("The weather shows a tendency to rain. Please bring umbrella. ");
} else {
  console.log("The weather is clear.No need to carry an umbrella. ");
}
