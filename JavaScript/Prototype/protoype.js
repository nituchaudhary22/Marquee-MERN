// 1. "._proto_" is a property in 'object' that point to inherited properties and methods from object,
//means if properties and methods are not available then try to access from inherited object
// 2._proto_ works in Object() to access modify or update inherit
let Nitu = {
name: 'Nitu',
age: 2,
email: 'nitu@gmail.com',
};
let str = 'madama';
console.log(Object().__proto__);
console.log(str.split("").reverse().join(""));

String.prototype.transform=function(){ //String prototype use kiya taaki transform bhi ek built in function ban jaayega..
    let result ="";
    for(let i=0;i<this.length;i++){
        result +=this[i]+"*";
    }
    return result;
};
console.log('NITU'.transform());
