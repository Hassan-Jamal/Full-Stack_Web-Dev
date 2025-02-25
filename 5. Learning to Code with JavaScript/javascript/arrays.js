var students = ["Jimmy", "Johnson","Jackei","Jack"];
var balances =[887.098, 77.98, -35.8,87.0];

var badpractice = ["johnson",77.98, "USA", true]; //not a good practice we can use object for this ,try to use single data type in arrays

var naughtyList =[];

naughtyList.push(students[0]);
naughtyList.push(students[1]);
naughtyList.push(students[2]);

var index = naughtyList.indexOf("Jackei"); 
console.log(index);

if(index > -1){
    naughtyList.splice(index,2);
}

console.log(naughtyList);