function Dog(name,breed,age,weight){
    this.name =name;
    this.breed=breed;
    this.age =age;
    this.weight =weight;
    this.eat =function(){
        console.log('Chomp');
    };
    this.bark=function(){
        console.log('Bark');
    };
}
const dogTheRaj =new Dog("Raju",'pitbull',3,30);
console.log(dogTheRaj);


function Student(enrollmentno,name,email,phone,address,course,year){
    this.enrollmentno=enrollmentno;
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.address=address;
    this.course=course;
    this.year=year;

    this.updateName=function(newName){
        this.name = newName;
    };
    this.updateEmail=function(newEmail){
        this.email=newEmail;
    };
    this.updatePhone=function(newPhone){
        this.phone=newPhone;
    };
    this.updateAddress=function(newAddress){
        this.address=newAddress;
    };
    this.updateYear=function(newYear){
        this.year=newYear;
    };
    this.updateCourse=function(newCourse){
        this.course=newCourse;
    };
}
const Student1 =  new Student(123,'Nitu','vvv',2341,'sdfdw','seddsws',2);
console.log(Student1);

Student1.updateName('Raj');

console.log(Student1.name);