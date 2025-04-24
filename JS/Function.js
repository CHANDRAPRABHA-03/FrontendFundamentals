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


//  Synchronous 

    function Greet(Message){
        return Message;
    }
    console.log(Greet("Hello"));

// add 
    function Add (a,b){
        return a+b;
    }
    console.log("Add:", Add(5,10));

// sub
function sub (a,b){
    return a-b;
}
console.log("Sub:", sub(5,10));

//Mul
function Mul (a,b){
    return a*b;
}
console.log("Multiply:", Mul(5,10));

//div
function div(a,b){
    return a/b;
}
console.log("Division:", div(10,5));




// Anonymous :call back : one in another function