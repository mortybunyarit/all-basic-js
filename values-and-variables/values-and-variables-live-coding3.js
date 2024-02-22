// ให้อธิบายการทำงานของ code และบอกว่าความผิดพลาดที่เกิดขึ้น เกิดจาก concept ใดในเรื่อง Types Conversion

let salary = '18000';

let salaryWithBonus = salary + 2000;
console.log(salaryWithBonus); 

let newSalaryWithBonus = Number(salary) + 2000;
console.log(newSalaryWithBonus);