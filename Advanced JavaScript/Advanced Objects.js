// Reference Type.

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// Context vs Scope.

console.log(this);
console.log(this === window); // = True
// this is the same thing a window
const object4 = {
    a: function() {
        console.log(this);
    }
}

// Instantiation.

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');