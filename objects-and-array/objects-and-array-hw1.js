/* มอนตี้ได้รับ requirement มาดังนี้
1. ให้สร้าง Object ชื่อ bookInfo เพื่อเก็บข้อมูลหนังสือ ซึ่งมี Property ดังนี้
    1. มี key title ไว้เก็บชื่อหนังสือ โดยกำหนด value เป็น 'Building a Second Brain'
    2. มี key author ไว้เก็บชื่อผู้เขียน โดยกำหนด value เป็น 'Tiago Forte'
    3. มี key numberOfPage ไว้เก็บจำนวนหน้า โดยกำหนด value เป็น 315

2. ให้ console.log object bookInfo ออกทางหน้าจอ และดูว่ามี key-value pair ทั้งหมดกี่คู่ อะไรบ้าง

[แก้] 3. ให้แสดงข้อความ 'This book is Building a Second Brain by Tiago Forte' [ต้องเห็นอันนี้บนหน้าจอ]
ด้วยการเข้าถึงข้อมูลใน object และนำมาแสดงผลด้วย String Template Literal

4. ให้เพิ่ม key rating ไว้ระบุคะแนนนิยม โดยกำหนด value เป็น 3.5

[แก้] 5. ให้แสดงข้อความ 'Building a Second Brain by Tiago Forte comes with 3.5 rating' [ต้องเห็นอันนี้บนหน้าจอ]
ด้วยการเข้าถึงข้อมูลใน object และนำมาแสดงผลด้วย String Template Literal

[แก้] 6. ให้ทำการเปลี่ยนค่าใน key rating จาก 3.5 เป็น 4.7 
และแสดงข้อความ rating ใหม่อีกรอบ รอบนี้จะต้องเห็นข้อความ 'Building a Second Brain by Tiago Forte comes with 4.7 rating' [ต้องเห็นอันนี้บนหน้าจอ]

[แก้] 7. ให้ทำการลบข้อมูลจำนวนหน้าออกจาก bookInfo
[แก้] 8. ให้ทำการ console.log object bookInfo อีกครั้ง ว่าเหลือ key-value pair ทั้งหมดกี่คู่ อะไรบ้าง
*/
let bookInfo = {
  title: "Building a Second Brain",
  author: "Tiago Forte",
  numberOfPage: 315,
};

console.log(bookInfo); //key-value pair ทั้งหมดมี 3 คู่ title: 'Building a Second Brain',// author: 'Tiago Forte',// numberOfPage: 315
console.log(`This book is ${bookInfo.title} by ${bookInfo.author}`);
bookInfo.rating = 3.5;
console.log(
  `${bookInfo.title} by ${bookInfo.author} comes with ${bookInfo.rating} rating`
);
bookInfo.rating = 4.7;
console.log(
  `${bookInfo.title} by ${bookInfo.author} comes with ${bookInfo.rating} rating`
);
delete bookInfo.numberOfPage;
console.log(bookInfo); //key-value pair ทั้งหมดมี 3 คู่  title: 'Building a Second Brain',// author: 'Tiago Forte',// rating: 4.7
