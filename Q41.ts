// Question 41

function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicianNames: string[] = ["Houdini", "Derren Brown", "Penn Jillette","David Copperfield", "Teller"];
  
  show_magicians(magicianNames);