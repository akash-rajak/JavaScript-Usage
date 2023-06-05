// Example usage of some common functions

// 1. Map: Applies a function to each element of an array and returns a new array
function performMap() {
  var numbers = [1, 2, 3, 4, 5];
  var doubledNumbers = _.map(numbers, function(num) {
    return num * 2;
  });
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
}

// 2. Filter: Creates a new array with all elements that pass a test
function performFilter() {
  var numbers = [1, 2, 3, 4, 5];
  var evenNumbers = _.filter(numbers, function(num) {
    return num % 2 === 0;
  });
  console.log(evenNumbers); // Output: [2, 4]
}

// 3. Reduce: Applies a function against an accumulator and each element in the array, reducing it to a single value
function performReduce() {
  var numbers = [1, 2, 3, 4, 5];
  var sum = _.reduce(numbers, function(acc, num) {
    return acc + num;
  }, 0);
  console.log(sum); // Output: 15
}
