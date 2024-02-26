// Question 30

let users: string[] =["Admin", "Fiza", "Ahmed", "Ali", "Mehreen"];
for(let i=0; i<users.length; i++){
    if(users[i] == "Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${users[i]} Thank you for logging in again.`)
    }
}
