/* จากข้อ 1 คุณพบว่า function ที่เขียนยังทำงานไม่ถูกต้อง ยังไม่มีการตรวจสอบตัวอักษรพิมพ์ใหญ่ พิมพ์เล็ก 
ทำให้แม้มี username 'Omega-13579' อยู่ในระบบแล้ว แต่ยังสามารถสมัครสมาชิกใหม่ด้วย 'omega-13579' ได้
ซึ่งในสถานการณ์จริงไม่ควรเป็นแบบนี้ คุณจึงปรับปรุง function ในข้อ 1 ใหม่ ให้ตรวจสอบอย่างเข้มข้นขึ้น 
โดยถือว่า 'Omega-13579' และ 'omega-13579' เป็นชื่อเดียวกัน 
สรุปง่ายๆ คือ ตัวอักษรที่พิมพ์เข้ามาจะเป็นพิมพ์ใหญ่หรือพิมพ์เล็ก ถ้าเป็นคำเดียวกันให้นับเป็นชื่อเดียวกันนั่นเอง
*/

const arrayOfUsername = ['aliza', 'Paul187z', 'Biliblliboom', 'Omega-13579']; 
let username1 = 'aliza'; // เมื่อ execute function จะเห็นข้อความ 'The username is not valid because it has already been used.'
let username2 = 'paul'; // เมื่อ execute function จะเห็นข้อความ 'You can use this username.'
let username3 = 'omega-13579'; // เมื่อ execute function จะเห็นข้อความ 'The username is not valid because it has already been used.'