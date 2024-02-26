// Question 44
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log("You ordered a sandwich with: ".concat(items.join(', ')));
    }
    console.log("--------------------------");
}
order_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
order_sandwich("Ham", "Swiss");
order_sandwich();
