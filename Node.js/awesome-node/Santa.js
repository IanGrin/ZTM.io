// Question 1
const fs = require('fs');

function question1() {
    fs.readFile('./Santas Instructions.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } else if (currentValue === ')') {
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('answer:', answer)
    })
}

question1()

// Question 2
function question2() {
    fs.readFile('./Santas Instructions.txt', (err, data) => {
        console.time('santa-time-2');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1; 
            } else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter ++
            return accumulator < 0;
        })
        console.timeEnd('santa-time-2');
        console.log('basement entered at: ', counter);
    }) 
}

question2();