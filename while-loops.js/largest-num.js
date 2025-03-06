// . Finding the Largest Digit in a Number Using While Loop

let num = 2333;
let i = 0;
let largerNum = 0;

let string = num.toString();
while (i < string.length) {
  let item = Number(string[i]);
  if (item > largerNum) {
    largerNum = Number(string[i]);
  }
  i++;
}
console.log(largerNum);
