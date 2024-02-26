// Question 17

let guestArr: string[] = ["Sadia ", "Mehreen", "Maryam","Dua", "Ramsha", "Moiz", "Aliza"] 
console.log("Dear Friends, I can invite only two people to the Dinner")

while(guestArr.length>2) {
    let removeGuest = guestArr.pop()
    console.log(`Dear ${removeGuest}, You are not invited to the dinner`)
}

guestArr.map((items) =>
console.log(`Dear ${items}, You are still invited to the dinner`)
);

guestArr.pop()
console.log(guestArr)