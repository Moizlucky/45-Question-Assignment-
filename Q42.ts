// Question 42

function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
    }
  }
  
  const magicianNames: string[] = ["Houdini", "Derren Brown", "Penn Jillette","David Copperfield", "Teller"];
  
  make_great(magicianNames);
  
  show_magicians(magicianNames);