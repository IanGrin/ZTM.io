// Scope - Variable access

// Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hello";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Bye";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    var fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();


// var b = "Can I access this?";

// function bb() {
//     var a = "hello";
// }