/* 2. Retrieve Top N Most Expensive Products
Description:

You are given an array of product objects, each with id, name, and price properties:

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 799 },
  { id: 3, name: "Monitor", price: 300 },
  { id: 4, name: "Headphones", price: 150 },
  { id: 5, name: "Keyboard", price: 100 }
];
Task:

Write a function getTopExpensiveProducts(products, n) that returns the top N most expensive products in descending order of price.
*/

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 799 },
  { id: 3, name: "Monitor", price: 300 },
  { id: 4, name: "Headphones", price: 150 },
  { id: 5, name: "Keyboard", price: 100 }
];

function getTopExpensiveProducts(products, n) {
  return products.sort((a,b) => b.price - a.price).slice(0,n); 
}

console.log(getTopExpensiveProducts(products, 3))