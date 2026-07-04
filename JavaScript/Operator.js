// Nullish Coalescing Operator?? :
// The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand 
// when its left-hand side operand is null or undefined 



let name = null;
let displayName = name ?? "Guest";
console.log(displayName); //Guest
// Guest
name = "Vikas";
let anotherName = name ?? "Mohit";
console.log(anotherName); //Mohit

// Optional Chaining (.?):
// Optional chaining (?.) in JavaScript is an ES2020 feature that lets you* Safely access nested object properties,
// * Array elements, or 
// *Call functions without throwing an error if an intermediate value is null or undefined — instead, 
// it returns undefined

const user ={profile:[]};
