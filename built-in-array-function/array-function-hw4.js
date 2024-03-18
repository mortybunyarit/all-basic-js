/* คุณได้รับ requirement ให้เขียน function ที่ช่วยสลับตำแหน่งตัวอักษรในคำ ให้เรียงจากหลังมาหน้า 
เช่น 
apple -> elppa
omega -> agemo
techup -> puhcet

แนะนำให้ใช้ .split(), .join(), .reverse()
*/

let reverseWord = (word) => {
  // แปลงคำเป็น array ของตัวอักษร
  let letters = word.split("");
  // สลับตำแหน่งของตัวอักษรใน array
  let reversedLetters = letters.reverse();
  // รวมตัวอักษรกลับเข้าด้วยกันเป็นคำเดียว
  let reversedWord = reversedLetters.join("");
  // คืนค่าคำที่ถูกสลับตำแหน่งแล้ว
  return reversedWord;
};

console.log(reverseWord("apple")); // elppa
console.log(reverseWord("omega")); // agemo
console.log(reverseWord("techup")); // puhcet

// const reverseWords = ["apple", "omega", "techup"];

// reverseWords.reverse("apple");

// console.log(reverseWords);
