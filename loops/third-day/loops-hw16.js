/* ให้แปลงโปรแกรมต้อนรับแขกที่มาร่วมงานเลี้ยงในข้อ 1 ให้เป็น function 
โดยตั้งชื่อ function และ parameter ให้เหมาะสม 
ให้พิมพ์ code ในส่วนของ for loop ใหม่ด้วยตัวเอง ห้าม copy วาง
*/

const guesses = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
  "Jenny",
  "Rose",
  "Thomas",
];


let greetingWithReturnKeyword = (array) => {
  let returnStr = '';

  for (let i = 0; i < array.length; i++) {
      let guestName = array[i];
      returnStr += `Hello ${guestName}! Welcome to my birthday party. \n`; // \n คือขึ้นบรรทัดใหม่
      console.log(`รอบที่ ${i+1} ในรอบนี้จะได้ข้อมูลดังนี้`);
      console.log(returnStr);
      console.log('--------------')
      }

  return returnStr;
}

console.log(greetingWithReturnKeyword(guesses));




// let greetGuest = (array) => {
//   // let guestName = 0;
//   for (let i = 0; i < array.length; i++) {
//     let guestName = array[i];
//     console.log(`Hello ${guestName}! Welcome to my birthday party.`);
//   }
// };
// // console.log(greetGuest(guesses));
// greetGuest(guesses);
