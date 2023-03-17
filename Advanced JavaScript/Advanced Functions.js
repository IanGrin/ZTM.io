// const first = () => {
//     const greet = 'Hi';
//     const second = () => {
//         alert(greet);
//     }
//     return second;
// }

// const newFunc = first();
// newFunc();

// Closures = a function ran. the function executed. It's never going to execute again.
// BUT it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

// Currying

// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMultiply(5);

//Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding side Effects, functional purity.

var a = 1;
function b() {
    a = 2;
}