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