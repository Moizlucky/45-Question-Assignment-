// Question 3


let personName: string ="Moiz";

//step 1 show in lowercase:

console.log ("lowercase", personName.toLowerCase());

//step 2 show in uppercase:

console.log ("uppercase", personName.toUpperCase());

// Title Case

console.log ("titlecase", personName.replace(/\bw/g,c => c.toUpperCase()));
