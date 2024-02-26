// Question 44

function order_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
      console.log("No items selected for the sandwich.");
    } else {
      console.log(`You ordered a sandwich with: ${items.join(', ')}`);
    }
    console.log("--------------------------");
  }
  
  order_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
  order_sandwich("Ham", "Swiss");
  order_sandwich();