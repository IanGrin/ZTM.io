// 1: gives methods access to their object
// 2: execute same code for multiple objects

// const obj = {
//     name: 'Billy',
//     sing() {
//         return 'lalala ' + this.name
//     },
//     singAgain() {
//         return this.sing() + '!'
//     }
// }

// obj.singAgain();//?

function importantPerson() {
    console.log(this.name + '!')
}
const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}
obj1.importantPerson();//?