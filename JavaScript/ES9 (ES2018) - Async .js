// for await of
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums); 
    } catch (err) {
        console.log('ooooooops', err);
    }
}

const getData2 = async function() {
    const arrayOfPromises = urls.map(urls => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}

getData2;//?
// // Finally
// const urls = [
//     'https://swapi.co/api/people/1',
//     'https://swapi.co/api/people/2',
//     'https://swapi.co/api/people/3',
//     'https://swapi.co/api/people/4'
// ]

// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json())
// }))
//     .then(array => {
//         console.log('1', array[0])
//         console.log('2', array[1])
//         console.log('3', array[2])
//         console.log('4', array[3])
//     })
//     .catch(err => console.log('ughhhh fix it!', err))
//     .finally(() => console.log('extra'));
