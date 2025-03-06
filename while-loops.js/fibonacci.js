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
console.log(fibonacciArray, "1");

// for loop
// let n = 10;

// for (let i = 0; i < n - 2; i++) {
//   let number = fibonacciArray[i] + fibonacciArray[i + 1];
//   fibonacciArray.push(number);
// }

// console.log(fibonacciArray, "2");
