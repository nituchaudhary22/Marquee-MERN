//Destructuring of arrays means assigning the elements of array to the variables.
const arr =['apple','banana','watermelon','orange'];
const [one,,two,...three]=arr;
console.log(one); //apple
console.log(two); //watermelon
console.log(three); //['orange']

let arrayOfcars = [
  'Maruti',
  [90, true, false],
  'Brezza',
  'Innova Hycross',
  'Hyundai',
];
const [first, ,second='Maruti', ...third] = [...arrayOfcars.flat(1),'Breeza','Maruti'];
console.log(first); 
console.log(second);
console.log(third);


//object destructuring uses the property names to extract the values
const person={
    name:'Nitu',
    age:12,
    email:'sddfs',
    phone:'2357765234576',
};
const {age,phone,address} =person;
console.log(age);
console.log(phone);
console.log(address);