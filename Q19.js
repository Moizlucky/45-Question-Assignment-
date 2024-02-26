// Question 19
var guestArr = ["Muneer", "Anas", "Ali"];
var canNotattend = "Muneer";
var newGuest = "Ramsha";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Dua");
var middleGuest = "Mehreen";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Sadia");
// console.log(guestArr);
console.log(guestArr.length + " " + "Friends" + " " + "are invited to dinner");
