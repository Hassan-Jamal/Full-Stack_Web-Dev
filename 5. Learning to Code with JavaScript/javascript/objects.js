//var students = ["John", "Jacob","Jack","johnson","johny"];
//
//for (var index=0; index<students.length; index++){
//    console.log(students[index]);
//}


var students = [];
function student (first,last,age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.greeting= function (){
        return "Hi My First Name is "+ this.firstName +" and my Last NAme is "+this.lastName+" and my age is " +this.age;
    };
}

students.push(new student("abc1","def2",23));
students.push(new student("abc2","def4",45));

var s1 = new student("Hassan","Jamal",22);
console.log(s1);
console.log(s1.greeting());

for (var index=0; index<students.length; index++){
    var student = students[index];
    console.log(student.greeting());
}
//
//var student1 = new Object();
//student1.firstName="Jack";
//student1.lastName="Looo";
//student1.age=15;

//var student2 ={};
//student2.firstName="Nobita";
//student2.lastName="vhan";
//student2.age=19;

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student.age);

