//hoisting--is a JavaScript mechanism where variables and function declaration are moved to top of their containing scope during the compilation phase
//function declaration are fully hoisted(including body)
// JavaScript provides three ways to declare variables.
// 1. var: Variable declared with var keyword have:
//-- Function-scoped (or globally scoped if declared outside a function).
// --Can be re-declared and re-assigned.
// --Hoisted (moved to the top of scope) but initialized as undefined
// var name='John';
// var name= 'Doe', // Redeclaration allowed
// console.log(name); Ουtput: Doe
// 2. Let (Recommended for variables that change)
// --Block-Scoped (only available inside () where declared)
// --Can be updated but not redeclared in the same scope.
// --Hoisted but not initialized (access before declaration causes ReferenceError).-
// let age=20;
// {
//     console.log(name); //reference error
//     let name='Nitu';
// }
// 3. Const (Recommended for constants)
// --Block-scoped.
// --Must be initialized at declaration.
// --Cannot be updated or redeclared.
// The value itself can be mutable if it's an object or array.
// PI 5.1436
// PI=3.14 X Error: Assignment to constant variable
// const colors =["red", "blue"];
// colors.push("green"); // Allowed (array content can change)
// console.log(colors); // Output ["red", "blue", "green"]
//Identifiers--all the element in programming that identifies the 


// Primitive Datatypes:
// These are immutable and stored directly in memory.
// 1. Number - Represents Integers and floating-point numbers.
// 2. String-Represents text enclosed in quotes.
// 3. Boolean-Represents true or false.
// 4. Undefined-A variable declared but not assigned a value.
// 5. Null-Represents an intentional empty value, null returns "object", and return which is a historical bug in JavaScript dating bacit to its first Implementation.
// 6. Symbol-Represents a unique and immutable value (often used as objectkeys)
// 7. NaN --isNan()Number. NaN is a property in JavaScript that represents a special value indicating that a value of a expression is not a number. It stands for "Not-A-Number" and is a unique data type in JavaStript This property is used to identify values that do not represent a valid number, which can occur in various situations
// such as when a mathematical operation falls to produce a numeric result
//Type coercion -JS automatically converts from one datatype to another
//1.Implicit type conversion-(Type coercion)-done automatically by js
//2.Explicit typ econversion -(Type casting)-Done manually by programmer


// console.log(name);
// var name;
// var name;
// name ='Nitu';
// name ='raju';
// greet();
// function greet(){
//     console.log('Hello! Good Morning ')
// }
// console.log(surname);
// console.log(name);

// let surname ='abc';
// let name='xyz';
// accessVariable();
// function accessVariable(){
//     console.log(name)
// }
 function AddtwoNumbers(a,b){
    console.log(a+b);
 }
 AddtwoNumbers(13,23);
 let human ={
   name :'Nitu',
   age :100,
   address :'India',
   isMinor : false,
   marks:[2,4,54,5],

   greet : function(){
      console.log('Good Morning');
   }
 }
 console.log(typeof(human));
 console.log(typeof(human.isMinor));
 console.log(human.greet());