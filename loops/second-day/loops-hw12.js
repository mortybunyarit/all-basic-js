/* ให้เขียนโปรแกรมตาม requirement ต่อไปนี้ 
1. declare function ชื่อว่า getPromote ซึ่งมี parameter 1 ตัวคือ array
2. function นี้จะทำการตรวจสอบพนักงานแต่ละคน หากพบว่าพนักงานคนนั้นเป็นโปรแกรมเมอร์ จะทำการเพิ่ม key promote ที่มี value = 'yes' เข้าไปในข้อมูลของพนักงานคนนั้นๆ
หากพบว่าพนักงานคนนั้นๆ ไม่ใช่โปรแกรมเมอร์ จะทำการเพิ่ม key promote ที่มี value = 'no' เข้าไปในข้อมูลของพนักงานคนนั้นๆ
3. เมื่อ execute function จะเห็นข้อมูลพนักงานที่มีการ update แล้ว โดยแต่ละคนจะมี key-value pairs ทั้งหมด 6 คู่ เพิ่ม key ที่ชื่อว่า promote เข้ามา
เช่น [{
    firstName: 'Jane',
    lastName: 'Doe',
    age: 35,
    position: 'AE',
    salary: 35000,
    promote: 'no'
  },...]
*/

const employees = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 35,
    position: "AE",
    salary: 35000,
  },
  {
    firstName: "Rose",
    lastName: "Clark",
    age: 25,
    position: "Programmer",
    salary: 30000,
  },
  {
    firstName: "Ken",
    lastName: "Madison",
    age: 32,
    position: "Admin",
    salary: 25000,
  },
  {
    firstName: "Barbara",
    lastName: "Oakley",
    age: 40,
    position: "CEO",
    salary: 100000,
  },
  {
    firstName: "Jack",
    lastName: "Jerkins",
    age: 55,
    position: "Programmer",
    salary: 40000,
  },
];

// เขียน function ที่นี่ได้เลยจ้า

getPromote(employees);
