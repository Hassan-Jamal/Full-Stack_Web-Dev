var lenght1=9;
var width1=8;
var area1=lenght1*width1;

var lenght2=9;
var width2=5;
var area2=lenght2*width2;

console.log(area2);
console.log(area1);

//instead we use Functions
function area (lenght,width){
    return lenght*width;
}
var a1=area(5,5);
var a2=area(6,6);

console.log(a1);
console.log(a2);

rectangleAreas=[];
rectangleAreas.push(area(10,5));
rectangleAreas.push(area(3,4));
rectangleAreas.push(area(5,0));

console.log(rectangleAreas);

//-----------------------------

var bankbalance =500;
function maketransaction (productprice){
    if(bankbalance >=  productprice){
        bankbalance -= productprice;
        console.log("Product purchased.");
    }
    else{
        console.log("Insufficient Balance.");
    }
}
console.log(bankbalance);
maketransaction(79);
console.log(bankbalance);
maketransaction(98);
console.log(bankbalance);
maketransaction(987.7);


//------------------------------
printcustomername = function(first,last){
    console.log("The First Name is " + first + " and Last Name is " +last);
};
printcustomername("Hassan","Jamal");

var bankoperation = [];
bankoperation.push(maketransaction);
bankoperation.push(printcustomername);

console.log(bankoperation);
