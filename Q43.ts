// Question 43

function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (const magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }
  
    return greatMagicians;
  }
  
  const magicianNames: string[] = ["Houdini", "Derren Brown", "Penn Jillette","David Copperfield", "Teller"];
  
  const greatMagicians = make_great([...magicianNames]); 
  
  show_magicians(magicianNames);
  
  show_magicians(greatMagicians);
  