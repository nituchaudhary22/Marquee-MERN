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

//check License holder
let userAge = 21;
let hasLicense = true;
function usercanDriveorNot(userAge, license) {
  if (userAge >= 18) {
    if (license === true) {
      console.log("Can drive");
    } else {
      console.log("Cannot drive");
    }
  } else {
    console.log("User Cannot drive");
  }
}
usercanDriveorNot(25, true);

console.log(getValue());
function getValue() {
  return "Today is Saturday";
}
getValue();

//GetMarks
function getGrade(marks) {
  switch (true) {
    case marks >= 90:
      return "Excellent";
    case marks < 90:
      return "Fail";
    default:
      return "Not A Grade";
  }
}
console.log(getGrade(99));

//Stone Paper Scissor
let user = "Rock";
let computer = "Scissor";
function Game(user, computer) {
  switch (true) {
    case user == "Rock" && computer == "Scissor":
      return "User Win";
    case user == "Scissor" && computer == "Rock":
      return "Computer Win";
    default:
      return "No one";
  }
}
console.log(Game(user, computer));
