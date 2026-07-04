let num = Number("hello");
console.log(typeof Number("234thhhṇṇ"));
console.log(typeof num);
console.log("56" + 50);
console.log(Number("56") + 50);
//Execution Context--it is the environment where JavaScript code is evaluated and executed.
//Global execution context(made when JS file is loaded)--can be accessed in whole code
let a = 10;
let b = 20;

function add() {
  return a + b;
}

console.log(add());//add can be called in entire code
//function execution context(made when function is called)--Every function call gets its own separate execution context.
function greet(name) {
  let message = "Hello";
  console.log(message + " " + name);
}

greet("Nitu");
//Creation phase -- variables and function declaration are moved to the top of code
// and 
// execution phase--execute line by line and update the variables & invoke the function 
x=30;
console.log(`Value of x1 is ${x}`);
var x=10;
console.log(`Value of x2 is ${x}`);
