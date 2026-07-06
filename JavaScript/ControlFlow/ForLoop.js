//Table
function table(num) {
  for (let i = 1; i < 11; i++) {
    console.log(`${num}x ${i} = ${5 * i}`);
  }
}
table(5);

//Sum of n numbers
function sum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
sum(3);

//odd numbers from 1 to 15
function oddNumbers() {
  for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
      console.log(`${i}`);
    }
  }
}
oddNumbers();

//divisible by 3 and 5
function divisible() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} is divisible by 3 and 5`);
    }
  }
}
divisible();

//not divisible by 3 AND 5
function notdivisible() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      console.log(`${i} is not divisible by 3 and 5`);
    }
  }
}
notdivisible();

console.log('hello');