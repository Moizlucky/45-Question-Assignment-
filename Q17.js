// Question 17
var guestArr = ["Sadia ", "Mehreen", "Maryam", "Dua", "Ramsha", "Moiz", "Aliza"];
console.log("Dear Friends, I can invite only two people to the Dinner");
while (guestArr.length > 2) {
    var removeGuest = guestArr.pop();
    console.log("Dear ".concat(removeGuest, ", You are not invited to the dinner"));
}
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", You are still invited to the dinner"));
});
guestArr.pop();
console.log(guestArr);
