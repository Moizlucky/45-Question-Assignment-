// Question 16


let guestArr:  string[] = ["Ramsha","Muneer", "Ali", "Anas",];
let canNotattend: string = "Muneer";
let newGuest: string = "Maryam";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
// console.log(guestArr);

// guestArr.map((item) =>
// console.log(`Dear ${item}, I found a bigger dinner table.`)
// );



let guestBegin : string = "Sidra"
guestArr.unshift(guestBegin);
// console.log(guestArr)


let middleGuest : string ="Dua"
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr)


guestArr.push("Faryal")
// console.log(guestArr)

guestArr.map((item) =>
console.log(`Dear ${item}, You are corodially invited to a dinner.`)
);