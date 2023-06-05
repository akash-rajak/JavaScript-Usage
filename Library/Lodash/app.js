// Example data
const numbers = [1, 2, 3, 4, 5];
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 40 },
  { id: 4, name: 'Alice', age: 35 }
];

// Chunk the numbers array into smaller arrays of size 2
function chunkArray() {
  const chunkedNumbers = _.chunk(numbers, 2);
  console.log('Chunked numbers:', chunkedNumbers);
}

// Get the first element of the numbers array
function getFirstElement() {
  const firstNumber = _.head(numbers);
  console.log('First number:', firstNumber);
}

// Get the last element of the numbers array
function getLastElement() {
  const lastNumber = _.last(numbers);
  console.log('Last number:', lastNumber);
}

// Find the user with age 25
function findUserWithAge25() {
  const userWithAge25 = _.find(users, { age: 25 });
  console.log('User with age 25:', userWithAge25);
}

// Sort the users array by age in ascending order
function sortUsersByAge() {
  const sortedUsers = _.sortBy(users, 'age');
  console.log('Sorted users:', sortedUsers);
}

// Calculate the sum of the numbers array
function calculateSum() {
  const sum = _.sum(numbers);
  console.log('Sum of numbers:', sum);
}

// Attach event listeners to the buttons
document.getElementById('chunkButton').addEventListener('click', chunkArray);
document.getElementById('headButton').addEventListener('click', getFirstElement);
document.getElementById('lastButton').addEventListener('click', getLastElement);
document.getElementById('findButton').addEventListener('click', findUserWithAge25);
document.getElementById('sortButton').addEventListener('click', sortUsersByAge);
document.getElementById('sumButton').addEventListener('click', calculateSum);
