
const fs = require('fs');

function question1() {
    fs.readFile('./Santas Instructions.txt', (err, data) => {
        console.time('santaTime');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } else if (currentValue === ')') {
                return acc -= 1;
            }
        }, 0);
        console.timeEnd('santaTime');
        console.log(answer);
    })
}

question1()