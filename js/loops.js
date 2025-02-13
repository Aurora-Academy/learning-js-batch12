// Loop
// Executing same logic over and over

// For
// do...while
// while...

// syntax
// for(start;check;increment/decrement){}

// Multiplication

for (let i = 1; i <= 10; i++) {
  console.log(`2*${i}=${2 * i}`);
}

// Sum of 1 to 100

let sum = 0;
for (let j = 1; j <= 100; j++) {
  // sum = sum+j;
  sum += j;
}
console.log(sum); // sum of all even natural number

// do while

let k = 1;
do {
  console.log(`2*${k}=${2 * k}`);
  k++;
} while (k <= 10);
