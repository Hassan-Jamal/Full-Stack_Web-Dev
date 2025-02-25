var numFeild1 = document.getElementById('numFeild1');
var numFeild2 = document.getElementById('numFeild2');
var resultFeild = document.getElementById('resultFeild');
var form= document.getElementById('xiswhatpercentofy');


form.addEventListener('submit' , function(event){
    if(!numFeild1.value || !numFeild2.value){
        alert("Please put both Values.");
    }
    else{
        var x = parseFloat(numFeild1.value);
        var y = parseFloat(numFeild2.value);
        var result=x/y;
        var percent = result *100;
        resultFeild.innerText="Answer " + percent +"%";
        event.preventDefault();
    }
    
});
