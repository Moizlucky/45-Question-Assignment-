// Question 32


const currentUsers: string[] = ["Muneeb", "Khalil", "Zain", "Sidra", "Marvi"];

const newUsers: string[] = ["Khalil", "Najeeb", "Shahbaz", "Ghouse", "Muneeb"];

function isUsernameTaken(username: string): boolean {
  return currentUsers.some((user) => user.toLowerCase() === username.toLowerCase());
}

for (const newUser of newUsers) {
  if (isUsernameTaken(newUser)) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}