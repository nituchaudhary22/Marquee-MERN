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