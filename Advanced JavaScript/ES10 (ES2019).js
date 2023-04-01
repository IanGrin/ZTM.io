const array2 = [1, [2, 3], [4, 5]]
array2.flat()

const array3 = [1, 2, [3, 4, [5]]]
array3.flat(2)//?

const entries = ['bob', 'sally',,,,,,,'cindy'];
entries.flat(2)//?

const userEmail = '           eddytheeaglegmail.com'
const userEmail2 = 'jonnydangerous@gmail.com       '
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

const obj = Object.fromEntries(userProfiles)//?
Object.entries(obj);//?

try {
    4 + 5
} catch {
    console.log('you messed up')
}

try {
    bob + 'hi'
} catch {
    console.log('you messed up')
}

try {
    bob + 'hi'
} catch (error) {
    console.log('you messed up' + error)
}