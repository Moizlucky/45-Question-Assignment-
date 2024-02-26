// Question 3
var personName = "Moiz";
//step 1 show in lowercase:
console.log("lowercase", personName.toLowerCase());
//step 2 show in uppercase:
console.log("uppercase", personName.toUpperCase());
// Title Case
console.log("titlecase", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
