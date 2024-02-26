// Question 15
var guestArr = ["Ali", "Ahmed", "Anas"];
var canNotattend = "Ali";
console.log(canNotattend + " " + "can not attend the dinner");
var newGuest = "Sanam";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", you are invited to the dinner"));
});
