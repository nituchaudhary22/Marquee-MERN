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
