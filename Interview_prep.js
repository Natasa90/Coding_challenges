/* 1. Retrieve Top N Active Users
Description:
You are given an array of user objects with the following structure:

const users = [
  { id: 1, name: "Alice", posts: 30 },
  { id: 2, name: "Bob", posts: 12 },
  { id: 3, name: "Charlie", posts: 45 },
  // ...
];
Task:
Write a function getTopUsers(users, n) that returns an array of the top n users based on the number of posts, sorted in descending order.
*/ 

const users = [
  { id: 1, name: "Alice", posts: 30 },
  { id: 2, name: "Bob", posts: 12 },
  { id: 3, name: "Charlie", posts: 45 },
];

function getTopUsers(users, n) {
  return users.sort((a,b) => b.posts - a.posts).slice(0, n)
}

console.log(getTopUsers(users, 2))


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

/* 3. Description:
You have a nested object of user settings:

const settings = {
  profile: {
    username: "alice",
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false
      }
    }
  }
};
Task:
Write a function getSetting(obj, path) where path is a string like 'profile.preferences.notifications.email', and it returns the value at that path.
*/

const settings = {
  profile: {
    username: "alice",
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false
      }
    }
  }
};

function getSetting(obj, path) {
  const keys = path.split('.')
  let current = obj; 
  for (let key of keys) {
    if (current && current.hasOwnProperty(key)) {
      current = current[key]; 
    } else {
      return undefined;
    }
  }
  return current; 
}
console.log(getSetting(settings, 'profile.preferences.notifications'))

/*
4. Find Duplicate Emails
Description:
You are given an array of user objects:

const users = [
  { id: 1, name: "Alice", email: "a@example.com" },
  { id: 2, name: "Bob", email: "b@example.com" },
  { id: 3, name: "Charlie", email: "a@example.com" },
  // ...
];
Task:
Write a function findDuplicateEmails(users) that returns an array of emails that appear more than once. 
*/

const users3 = [
  { id: 1, name: "Alice", email: "a@example.com" },
  { id: 2, name: "Bob", email: "b@example.com" },
  { id: 3, name: "Charlie", email: "a@example.com" },
  { id: 4, name: "Charlie", email: "a@example.com" },
];

function findDuplicateEmails(users) {
  const emails = users.map((user) => user.email); 
  const duplicates = emails.filter((email, index) => emails.indexOf(email) !== index);
  return [...new Set(duplicates)]
}
console.log(findDuplicateEmails(users3))