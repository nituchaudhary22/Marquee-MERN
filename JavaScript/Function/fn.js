function sayHello(name) {
    return "Hello, " + name + "!";
}
function executeFunction(fn, name) {
    return fn(name);
}
console.log(executeFunction(sayHello, "Alice"));

function greet(){
    return function(){
        console.log('Good morning!');
    };
}
let greetMsg = greet();
greetMsg();



var saybye=() => {
    console.log('Good bye!');
};
saybye();


var add = (a,b) => a+b +' Hello';
let val =add(12,34);
console.log(val);

//spread operator and rest operator
function collect(...args){
    //rest
    console.log(...args);
}
let values =[1,2,3];

//spread
collect(...args);

let [val1,val2, ...rest] = [...values];
console.log(val1);
console.log(val2);
console.log(rest);


//rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
// 10

(function (val1,val2){
    console.log(`Hello greet ${val1 + val2}`);
})(12,12);

//Types of Function
//higher order function--function that can accept function aruguments or result.
//arrow function--single-line syntax(),anonymous,return statement and curly brackets can be skip,
//function expression-when function is assigned to a variable
//immedialtely invoked function expression--
//function declaration--

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
        },
    };
}

let Person1 = createPerson('Rajj', 12);
let Person2 =createPerson('Nituu','13');
console.log(typeof manish);
Person1.greet();
Person2.greet();
