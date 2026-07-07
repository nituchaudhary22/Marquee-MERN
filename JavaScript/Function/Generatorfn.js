function* simpleGenerator() {
  yield 'Hello';
  yield 'World';
}
const iterator = simpleGenerator();
console.log(iterator.next());

console.log(iterator.next().value); // "Hello"
console.log(iterator.next().value); // "World"
console.log(iterator.next().done); // true
//