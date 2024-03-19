/* จากข้อมูลหนังสือด้านล่าง ให้

1. เขียน function showBookInfo ที่เมื่อเรียกใช้งานจะแสดงข้อความ 'ชื่อหนังสือ by ชื่อผู้แต่ง' แบบนี้ 
The Great Gatsby by F. Scott Fitzgerald
To Kill a Mockingbird by Harper Lee
...

2. เขียน function addBookInfo ที่เมื่อเรียกใช้งานจะใส่ข้อมูลราคาหนังสือแต่ละเล่มเข้าไป
โดยทุกเล่มอยู่ในช่วง sale จึงมีราคาเท่ากันคือ 199 บาท

3. เขียน function showBookPrice ที่เมื่อเรียกใช้งานจะแสดงข้อมูลราคาของหนังสือแต่ละเล่มในรูปแบบ 'ชื่อหนังสือ is ราคา thb.' แบบนี้
The Great Gatsby is 199 thb.
To Kill a Mockingbird is 199 thb.
...
*/

let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Animal Farm", author: "George Orwell", pages: 144 },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
];

//ใช้ forEach() เพื่อการวนลูปผ่านสมาชิกในอาร์เรย์หรือคอลเลกชันอื่นๆ แล้วนำมาประมวลผลตามที่กำหนด

// Function to show book info
let showBookInfo = () => {
  books.forEach((book) => {
    console.log(`${book.title} by ${book.author}`);
  });
};

// Function to add book price
let addBookInfo = () => {
  books.forEach((book) => {
    book.price = 199;
  });
};

// Function to show book price
let showBookPrice = () => {
  books.forEach((book) => {
    console.log(`${book.title} is ${book.price} thb.`);
  });
};

// Call the functions
showBookInfo();
addBookInfo();
showBookPrice();

// let books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
//   { title: "1984", author: "George Orwell", pages: 328 },
//   { title: "Animal Farm", author: "George Orwell", pages: 144 },
//   { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
// ];

// let showBookInfo = () => {};

// let addBookInfo = () => {};

// let showBookPrice = () => {};
