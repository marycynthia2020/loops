// Print all even numbers up to and including N. Don't include 0.

let n = 12;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// using continue

for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
