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