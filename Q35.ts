// Question 35

const animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Animal Names:");
for (const animal of animals) 

{
  console.log(animal);
}

console.log("\nStatements about Animals:");
for (const animal of animals) 

{
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");