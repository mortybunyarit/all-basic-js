// ให้เขียน function รวมผลบวกของตัวเลขทั้งหมดใน array โดยใช้ .reduce()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // เมื่อ function ทำงานต้องได้คำตอบ = 55

let sumNumber = (array) => {
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sum;
};

console.log(sumNumber(numbers));
