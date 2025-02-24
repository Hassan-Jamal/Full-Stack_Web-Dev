if (1==1 && 2==2 || "joe" === "je"){
    console.log("One of These OR both true");
}
else{
    console.log("Not the same");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;

if (cat1 > cat2 && cat1>cat3){
    console.log("Cat1 is cutest!!!");
}
else if(cat2 >cat3 && cat2>cat1) {
    console.log("Cat2 is Cutest!!!");
}
else if (cat3>cat1 && cat3>cat2){
    console.log("cat3 is cutest!!!");
}
else{
    console.log("No one is more Cute then You cutie.");
}