/* มอนตี้ได้รับ requirement ให้เขียนโปรแกรมสัญญาณไฟจราจร 
โดย:
หากไฟจราจร ณ ปัจจุบันเป็นสีเหลือง จะต้องเปลี่ยนเป็นสีแดง
หากไฟจราจร ณ ปัจจุบันเป็นสีแดง จะต้องเปลี่ยนเป็นสีเขียว
หากไฟจราจร ณ ปัจจุบันเป็นสีเขียว จะต้องเปลี่ยนเป็นสีเหลือง

เมื่อโปรแกรมทำงาน 
สัญญาณ ณ แยก A ที่เดิมเป็นสีแดงจะเปลี่ยนเป็นสีเขียว และต้องเห็นข้อความ 'ไฟจราจรได้เปลี่ยนเป็นสีเขียว'
*/

let intersectionA = "red";

if (intersectionA === "yellow") {
  intersectionA = "red";
  console.log("ไฟจราจรได้เปลี่ยนเป็นสีแดง");
} else if (intersectionA === "red") {
  intersectionA = "green";
  console.log("ไฟจราจรได้เปลี่ยนเป็นสีเขียว");
} else if (intersectionA === "green") {
  intersectionA = "yellow";
  console.log("ไฟจราจรได้เปลี่ยนเป็นสีเหลือง");
}

// ให้เขียน code ต่อเพื่อให้โปรแกรมทำงานได้ครบถ้วนตาม requirement
