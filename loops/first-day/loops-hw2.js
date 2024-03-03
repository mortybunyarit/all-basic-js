/* ให้เขียนโปรแกรมต้อนรับแขกที่มาร่วมงานเลี้ยง โดยแสดงข้อความ 'Hello guessName! Welcome to my birthday party.' 
โดยใช้ for of loop
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

for (let name of guesses) {
  console.log("Hello" + " " + name + "! Welcome to my birthday party ");
}
