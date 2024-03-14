/* คุณได้รับ requirement ให้เขียน function สมัครสมาชิกเว็บไซต์

function นี้จะรับ parameter 2 ตัวคือ 
1. ข้อมูลชื่อสมาชิกทั้งหมดในระบบ ซึ่งอยู่ในรูปแบบ array 
2. username ที่ user ต้องการใช้ในการสมัครสมาชิก

หาก username ที่ user กรอกเข้ามามีคนใช้งานแล้ว ระบบจะแจ้งเตือนเป็นข้อความว่า 'The username is not valid because it has already been used.'
หาก username ที่ user กรอกเข้ามายังว่างอยู่ สามารถใช้งานได้ ระบบจะแสดงข้อความ 'You can use this username.'

function นี้จะทำงานโดยใช้ built-in array function ที่ชื่อว่า .includes() เข้ามาช่วย
*/

const arrayOfUsername = ['aliza', 'Paul187z', 'Biliblliboom', 'Omega-13579']; 
let username1 = 'aliza'; // เมื่อ execute function จะเห็นข้อความ 'The username is not valid because it has already been used.'
let username2 = 'paul'; // เมื่อ execute function จะเห็นข้อความ 'You can use this username.'
let username3 = 'omega-13579'; // เมื่อ execute function จะเห็นข้อความ 'You can use this username.'

