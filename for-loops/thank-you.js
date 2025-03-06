// Given an array of names, write a program that prints a thank your message for each of the user. Sample output: "Thank you user for the birthday gift", where "user" is the name(s) from the array

let nameArray = ["Andrew", "Chi", "Kate", "Japan"];

for (let i = 0; i < nameArray.length; i++) {
  console.log(`Thank you ${nameArray[i]} for the birthday gift`);
}
