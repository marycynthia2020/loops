// Summing the Digits of a Number with While Loop

let num = 24049;
let i = 0;
let sum = 0;
let string = num.toString();

while (i < string.length) {
  let item = string[i];
  let number = Number(item);
  sum += number;
  i++;
}
console.log(sum);

// using a combination of while and for loop though longer

// while (i == num) {
//   let string = i.toString();
//   //   console.log(string);
//   for (let j = 0; j < string.length; j++) {
//     // console.log(string[j]);
//     // convert each to number

//     let item = string[j];
//     // console.log(item);

//     let number = Number(item);
//     // console.log(number);
//     sum += number;
//     // console.log(number);
//     // sum += number;
//   }
//   console.log(sum);
//   //   console.log(sum);
//   break;
// }
