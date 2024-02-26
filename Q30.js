// Question 30
var users = ["Admin", "Fiza", "Ahmed", "Ali", "Mehreen"];
for (var i = 0; i < users.length; i++) {
    if (users[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[i], " Thank you for logging in again."));
    }
}
