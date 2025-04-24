var a = 10;
var a = "styring";

function name(){
    if(true){
        var a = false;
    }
    console.log(a);
}


function name(){
    if(true){
        var a = false;
    }
    
}
console.log(a);

function name(){
    if(true){
        let a = false;
    }
    console.log(a);
}

const z = 2;
console.log(z);

let p = 10;
console.log(p);


//function declaration
//function laptop(){};

//function expression:
//var b = function car(){};

//arrow function
//const variable = () {};

//anonomymous function:it is  used to call back function
//function(){

//}

//1st citizen  function or 1st division function
//function(){

//}{
 //   re
//}

function name(){
    console.log("hello");
}


function name(){
    console.log("hello");
    return 10;
}


console.log(a);

var a = function name(){
    console.log("hello");
    return 10;
}

a();

const r = (a,b) =>  a + b;
    console.log(r(10,5));


    //setTimeout is asynchronous function,it is inbuilt one 

    setTimeout(function name(){
        
    },5000);


    console.log("1000");
    setTimeout(function name(){
        console.log("setTimeout");
    },5000);
    console.log("1000");


    console.log("1000");
    setTimeout(function name(){
        console.log("setTimeout");
    },1000);
    console.log("1000");
    console.log("1000");
    console.log("1000");
    console.log("1000");
    console.log("1000");
    console.log("1000");
    console.log("1000");
    console.log("1000");
    console.log("1000");
    console.log("1000");


    function xFunction(){
        console.log("x");

        function yFunction(){
            console.log("y");
        }
       yFunction();

    }
    xFunction();

    const q = (a,b) =>  a + b;
    console.log(q(10,5));


    const s = (a,b) =>  a - b;
    console.log(s(10,5));


    const m = (a,b) =>  a * b;
    console.log(m(10,5));


    const y = (a,b) =>  a / b;
    console.log(y(10,5));


    
    function num(a, b) {
        function add() {
            return a + b;
        }
        function subtract() {
            return a - b;
        }
        function multiply() {
            return a * b;
        }
        function divide() {
            return a/b;
        }
    
        return {
            addition: add(),
            subtraction: subtract(),
            multiplication: multiply(),
            division: divide()
        };
    }
    
    const result = num(10, 5);
    console.log(result);




    function Greet(Message){
        return Greet;
    }
    console.log(Greet("Hello"));

