// Question 37

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`T-shirt Summary: Size - ${size}, Message - "${message}"`);
  }
  
  make_shirt();
  
  make_shirt("Medium");
  
  make_shirt("Small", "TypeScript is awesome!");