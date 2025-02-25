var myaccountbalance = 300;
var coupon = 400;
var shoesprice = 699;
// <=, >= operator
if (myaccountbalance >= shoesprice){
    myaccountbalance -= shoesprice;
    console.log("You Just Buy a shoes");
    console.log("Your account Balance is "+myaccountbalance);
}
else if (myaccountbalance+coupon >= shoesprice){
    //myaccountbalance = myaccountbalance+coupon-shoesprice;
    myaccountbalance -= shoesprice-coupon;
    console.log("You Just Buy a shoes with a Coupon."); 
    console.log("Your account balance is " + myaccountbalance);
}
else {
    console.log("Account Balance is Not enough!!!");
}

// ==, !== , === operator
var var1 = "3";
var var2 = "3";
if (var1==var2){
    console.log("These are the same.but may or may not their types.");
}
else if (var1 !== var2){
    console.log("These are not equal with !== operator");
}
else{
    console.log("These are not the same..."); 
}

if (var1===var2){
    console.log("These are the same even their types.");  //if var2="3" it will be printed in console.
}
