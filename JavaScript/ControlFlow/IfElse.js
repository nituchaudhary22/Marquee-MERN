let x = 10;
if (x % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//Can Vote
let age = 20;
if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}
//Check Even or odd
function checkEvenOdd(value) {
  if (value % 2 == 0) {
    console.log(`${value} is Even`);
  } else {
    console.log(`${value} is Odd`);
  }
}
checkEvenOdd(91);

//checkAdmin
function checkAdmin(value) {
  if (value === true) {
    console.log("User is Admin");
  } else {
    console.log("Guest User");
  }
}
checkAdmin(91);



console.log(getValue());
function getValue() {
  return "Today is Saturday";
}
getValue();

//GetMarks
