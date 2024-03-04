/* ต่อจากข้อ 12 ให้เขียนโปรแกรมเพิ่มเติมตาม requirement ต่อไปนี้ 
1. declare function ชื่อว่า updatePosition ซึ่งมี parameter 1 ตัวคือ array
2. function นี้จะทำการตรวจสอบพนักงานแต่ละคน หากพบว่าพนักงานคนนั้นได้รับการ promote จะทำการเปลี่ยนแปลงข้อมูล position จาก Programmer เป็น Senior Programmer 
3. เมื่อ execute function จะเห็นข้อมูลพนักงานที่มีการ update แล้ว โดยคนที่มี position เป็น Programmer ต้องมี position ใหม่เป็น Senior Programmer
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

let getPromote = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].position === "Programmer") {
      array[i].promote = "yes";
    } else {
      array[i].promote = "no";
    }
  }
  return array;
};

let updatePosition = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].promote === "yes" && array[i].position === "Programmer") {
      array[i].position = "Senior Developer";
    }
  }
  return array;
};

console.log(getPromote(employees));
console.log(updatePosition(employees));
