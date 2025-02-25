//Aly's Car Garage
this.car ="Honda Civic";
// Hassan's car
var hassancar = {
    car:"Aston Martin",
    getcar:function(){
        return this.car;
    }
    
};

console.log(hassancar.getcar());

var gethassancar = hassancar.getcar;//error occur bind case
console.log(gethassancar());

var getrealhassancar = hassancar.getcar.bind(hassancar);
console.log(getrealhassancar());
