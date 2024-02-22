// ให้อธิบายการทำงานของ code และบอกว่าความผิดพลาดที่เกิดขึ้น เกิดจาก concept ใดในเรื่อง Types Conversion

let salary = "18000";

// implicit types conversion
let salaryWithBonus = salary + 2000; //เข้าใจผิด นึกว่าเราอยากทำ string concatenation เพราะเห็นเอา string + number
console.log(salaryWithBonus);

// explicit types conversion
let newSalaryWithBonus = Number(salary) + 2000;
console.log(newSalaryWithBonus);
