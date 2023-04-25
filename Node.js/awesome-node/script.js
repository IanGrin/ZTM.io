const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    console.time('funChallenge')
    if (err) {
        console.log('error');
    }
    console.log('Async', data.toString('utf8'));
    console.timeEnd('funChallenge')
})

const file = fs.readFileSync('./hello.txt');
console.log('sync', file.toString());

// Append
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// Write
// fs.writeFile('bye.txt', ' Sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// Delete
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err);
//     }
// })