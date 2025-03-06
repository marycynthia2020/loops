// Generating Fibonacci Sequence up to N Terms with While Loop

let fibonacciArray = [0, 1];
let i = 0;
let n = 10;
// // while loop

while (i < n - 2) {
  let number = fibonacciArray[i] + fibonacciArray[i + 1];
  fibonacciArray.push(number);
  i++;
}
console.log(fibonacciArray, "using while loop");

// while loop startin with empty array

// let fibonacciArray = [];
while (i < n) {
  if (i < 2) {
    fibonacciArray.push(i);
  } else {
    let number = fibonacciArray[i - 2] + fibonacciArray[i - 1];
    fibonacciArray.push(number);
  }
  i++;
}
// console.log(fibonacciArray, "starting with empty array");

// for loop
// let n = 10;

// for (let i = 0; i < n - 2; i++) {
//   let number = fibonacciArray[i] + fibonacciArray[i + 1];
//   fibonacciArray.push(number);
// }

// console.log(fibonacciArray, "using or loop");
