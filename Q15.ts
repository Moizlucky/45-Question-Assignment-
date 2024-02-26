// Question 15


let guestArr: string[]= ["Ali", "Ahmed", "Anas"];
let canNotattend: string = "Ali";

console.log(canNotattend + " " + "can not attend the dinner");

let newGuest: string = "Sanam";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;

guestArr.map((item) => 
  console.log(`Dear ${item}, you are invited to the dinner`)
);