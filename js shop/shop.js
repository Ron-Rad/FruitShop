// The products and prices arrays
let products = ["apple", "banana", "orange", "watermelon", "grapes", "naartjie", "lemon"];
let prices = [6, 9, 7, 18, 9, 2, 5];

// Intro to the shop
console.log("Welcome to the Fruit Shop!");

//Starting cart array
let cart = [];

// Display all products and their prices
function displayProducts() {
  console.log("Available products:");
  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]} - R${prices[i]}`);
  }
}

// Add an item to the cart
function addToCart(productIndex, count) {
  let product = products[productIndex];
  let price = prices[productIndex];
  let item = { product: product, count: count, price: price };
  cart.push(item);
  console.log(`Added ${count} ${product}(s) to your cart`);
}

// View the cart
function viewCart() {
  console.log("Your cart:");
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    console.log(`${i + 1}. ${item.count} ${item.product}(s) - R${item.price * item.count}`);
    total += item.price * item.count;
  }
  console.log(`Total: R${total}`);
}

// Remove an item from the cart
function removeFromCart(index) {
  if (index >= 0 && index < cart.length) {
    let item = cart.splice(index, 1)[0];
    console.log(`Removed ${item.count} ${item.product}(s) from your cart`);
  }
}

// Check out
function checkOut() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price * item.count;
  }
  console.log("Your total is R" + total);
  console.log("Please enter your budget:");
  let budget = parseInt(prompt("Budget: "));
  console.log(`You entered a budget of R${budget}`);
  if (total > budget) {
    console.log("Unfortunately this isnt enough. You need to add R" + (total - budget) + " more.");
    console.log("Please add more money to your budget:");
    let addedBudget = parseInt(prompt("Added budget: "));
    console.log(`You added R${addedBudget} to your budget`);
    budget += addedBudget;
    if (total <= budget) {
      console.log("Checkout successful! Thank you for shopping with us today");
    } else {
      console.log("Unfortunately this isnt enough. Get out of my shop!");
    }
  } else {
    console.log("Checkout successful! Thank you for shopping with us today");
  }
}

// Main program loop

// Main program loop

displayProducts();
console.log("Enter the product number and count to add to your cart, or 'done' to finish:");
while (true) {
  let input = prompt("Enter the product number and count (e.g. '1 2' for 2 apples) , please put space between the item and quantity/count, to add to your cart, or 'done' to finish: ");
  console.log(`You entered: ${input}`);
  if (input.toLowerCase() === 'done') {
    break;
  }
  let parts = input.split(' ');
  let productIndex = parseInt(parts[0]) - 1;
  let count = parseInt(parts[1]);
  if (isNaN(count) || count <= 0) {
    console.log("Error: Please enter a valid count. Choose from choices provided");
    continue;
  }
  addToCart(productIndex, count);
  console.log("Your cart:");
  viewCart();
}

console.log("Here are your choices:");
console.log("1. Remove from cart");
console.log("2. View cart");
console.log("3. Checkout");
while (true) {
  let choice = prompt("Type in your choice (e.g. remove, view, or checkout) ");
  console.log(`You entered: ${choice}`);
  choice = choice.toLowerCase();
  if (choice === 'remove') {
    console.log("Enter the item number to remove:");
    let removeIndex = parseInt(prompt("Item number: ")) - 1;
    console.log(`You entered: ${removeIndex + 1}`);
    removeFromCart(removeIndex);
  } else if (choice === 'view') {
    viewCart();
  } else if (choice === 'checkout') {
    checkOut();
    break;
  } else {
    console.log("Error: Invalid choice. Please try again.");
  }
}
