debugger;
// console.log("Global Execution Context starts");

// var globalVariable = "I am a global variable";

// console.log(globalVariable);
// console.log(globalFunction);
// globalFunction();

// console.log("Global Execution Context ends");

// var globalFunction = function () {
//   console.log("Inside global function");
// };
let name:'Vikas';
console.log('Before function ${name}');
function display(name){
  name ='Jaspreet';
  console.log('After Updating inside the function..${name}');
}
console.log('object');
