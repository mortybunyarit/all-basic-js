/* จากข้อมูลหนังสือด้านล่าง ให้

1. เขียน function showBookInfo ที่เมื่อเรียกใช้งานจะแสดงข้อความ 'ชื่อหนังสือ by ชื่อผู้แต่ง consist of จำนวนหน้า pages' 
แบบนี้ 
The Great Gatsby by F. Scott Fitzgerald consist of 180 pages
To Kill a Mockingbird by Harper Lee consist of 281 pages
...


2. เขียน function selectAuthor ที่เมื่อเรียกใช้งานจะเข้าไปเลือกหนังสือของผู้เขียนที่ระบุ
เช่น ถ้า user ใส่ชื่อผู้เขียนเป็น George Orwell จะเห็น

[
  { title: '1984', author: 'George Orwell', pages: 328 },
  { title: 'Animal Farm', author: 'George Orwell', pages: 144 }
]

3. เขียน function ชื่อ reviseSelectAuthor ซึ่งมีหลักการทำงานเหมือน function selectAuthor 
แต่มีการปรับปรุงการแสดงผลหน้าจอ เช่น 
ถ้า user ใส่ชื่อผู้เขียนเป็น George Orwell จะเห็นข้อความดังนี้

We have 2 books by George Orwell which are...
1984
Animal Farm

4. เขียน function editPages ที่เมื่อเรียกใช้งานจะเข้าไปแก้ไขจำนวน page ของหนังสือที่เราระบุ
function นี้จะรับ parameter 3 ตัวคือ ข้อมูลหนังสือทั้งหมด, ชื่อหนังสือที่เราอยากเปลี่ยนจำนวนหน้า และ จำนวนหน้าใหม่
เช่น อยากเปลี่ยนจำนวนหน้าของ The Great Gatsby จาก 180 หน้าเป็น 300 หน้า
เมื่อ function นี้ทำงาน จะแสดงข้อความ 'The Great Gatsby consist of 180 page, now consist of 300 pages'
*/

let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Animal Farm", author: "George Orwell", pages: 144 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1178 },
];
