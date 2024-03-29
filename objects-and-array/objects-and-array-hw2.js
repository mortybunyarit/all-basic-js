/* มอนตี้ได้รับ requirement มาดังนี้ 
[แก้] 1. ให้ประกาศตัวแปรชื่อ fruits ด้วย keyword const โดยกำหนด value เป็น empty array
[แก้] 2. ให้เพิ่ม 'apple' เข้าไป ใน empty array นี้ จากนั้น console.log เพื่อดูความเปลี่ยนแปลง
3. ให้เพิ่ม 'banana' เข้าไปใน array นี้ จากนั้น console.log เพื่อดูความเปลี่ยนแปลง
[แก้] 5. ให้เพิ่ม 'orange' เข้าไปใน array นี้ โดยเมื่อ console.log จะต้องเห็นข้อมูลเรียงตัวแบบนี้ ['orange', 'apple', 'banana']
6. ให้เพิ่ม 'peach' เข้าไปใน array นี้ โดยเมื่อ console.log จะต้องเห็นข้อมูลเรียงตัวแบบนี้ ['peach', 'orange', 'apple', 'banana']
7. ให้ลบ 'banana' ออกจาก array นี้ จากนั้น console.log เพื่อดูความเปลี่ยนแปลง
8. ให้ลบ 'peach' ออกจาก array นี้ จากนั้น console.log เพื่อดูความเปลี่ยนแปลง
[แก้] 9. ให้เปลี่ยนค่าใน array จาก 'orange' เป็น 'avocado' จากนั้น console.log เพื่อดูความเปลี่ยนแปลง
10. ให้ console.log เพื่อแสดงจำนวนสมาชิกใน array นี้ ว่ามีสมาชิกทั้งหมดกี่ตัว
*/

const fruits = [];

// fruits[0] = "apple";
fruits.push("apple");
console.log(fruits);

fruits.push("banana");
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);

fruits.unshift("peach");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits[0] = "avocado";
console.log(fruits); // มีสมาชิกทั้งหมด 2 ตัว คือ [ 'avocado', 'apple' ]
