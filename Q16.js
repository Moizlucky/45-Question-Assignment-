// Question 16
var guestArr = ["Ramsha", "Muneer", "Ali", "Anas",];
var canNotattend = "Muneer";
var newGuest = "Maryam";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
// console.log(guestArr);
// guestArr.map((item) =>
// console.log(`Dear ${item}, I found a bigger dinner table.`)
// );
var guestBegin = "Sidra";
guestArr.unshift(guestBegin);
// console.log(guestArr)
var middleGuest = "Dua";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr)
guestArr.push("Faryal");
// console.log(guestArr)
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", You are corodially invited to a dinner."));
});
