// Question 19

let guestArr: string[] = ["Muneer", "Anas", "Ali"]
let canNotattend: string = "Muneer";
let newGuest: string = "Ramsha";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Dua");
let middleGuest: string = "Mehreen";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Sadia");
// console.log(guestArr);


 console.log(guestArr.length + " " + "Friends" + " " + "are invited to dinner");