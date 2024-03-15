/* ให้เขียนโปรแกรมต้อนรับแขกที่มาร่วมงานเลี้ยง โดยแสดงข้อความ 'Hello guessName! Welcome to my birthday party.' 
โดยใช้ for loop
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

for (let i = 0; i < guesses.length; i++) {
  console.log(`Hello ${guesses[i]}! Welcome to my birthday party.`);
}

// for (let i = 0; i <= 12; i++) {
//   console.log(`Hello ${guesses[i]}! welcome to my birthday party.`);
// }

// for (let i = 0; i < guesses.length; i++) {
//   console.log(`Hello ${guesses[i]} welcome to my birthday party.`);
// }
