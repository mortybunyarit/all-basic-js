/* ให้ใช้ switch case ในการเขียนโปรแกรมตาม requirement ดังนี้
1. หากวันที่ user ป้อนเข้ามาเป็น 'monday' จะต้องแสดงข้อความ "It's Monday!."
2. หากวันที่ user ป้อนเข้ามาเป็น 'tuesday' จะต้องแสดงข้อความ "Happy Tuesday!."
3. หากวันที่ user ป้อนเข้ามาเป็น "wednesday" จะต้องแสดงข้อความ "It's Wednesday!"
4. หากวันที่ user ป้อนเข้ามาเป็น "thursday" จะต้องแสดงข้อความ "OMG! It's Thursday"
5. หากวันที่ user ป้อนเข้ามาเป็น "friday" จะต้องแสดงข้อความ "Hello Friday!"
6. หากวันที่ user ป้อนเข้ามาเป็น "saturday" จะต้องแสดงข้อความ "Happy Saturday!"
7. หากวันที่ user ป้อนเข้ามาเป็น "sunday" จะต้องแสดงข้อความ "It's Sunday! Time to recharge"
8. หาก user ป้อนคำอื่นที่ไม่ใช้วันเข้ามา จะต้องแสดงข้อความ "Invalid input. Please enter a valid day of the week."
*/

let usersDate = 'friday';

let message;

switch (usersDate) {
  case "monday":
    message = "It's Monday!.";
    break;
  case "tuesday":
    message = "It's Tuesday!.";
    break;
  case "wednesday":
    message = "It's Wednesday!";
    break;
  case "thursday":
    message = "It's Thursday!";
    break;
  case "friday":
    message = "It's Friday!";
    break;
  case "saturday":
    message = "It's Saturday!";
    break;
  case "sunday":
    message = "It's Sunday!";
    break;
  default:
    message = "Invalid input. Please enter a valid day of the week.";
}

console.log(message);
