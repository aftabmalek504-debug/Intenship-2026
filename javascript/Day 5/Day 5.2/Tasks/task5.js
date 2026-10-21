// Task 5: Calculate the total price using reduce().

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 60 },
  { name: "Bag", price: 500 }
];

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(`Total price: ₹${totalPrice}`);
