function sayHello(name) {
    return "Hello, " + name + "!";
}
function executeFunction(fn, name) {
    return fn(name);
}
console.log(executeFunction(sayHello, "Alice"));
