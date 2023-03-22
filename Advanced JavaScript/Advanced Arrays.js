// // Advanced Arrays

// const array = [1, 2, 10, 16];

// const double = []
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// })

// console.log('forEach', double);

// // Map, Filter, Reduce.

// const mapArray = array.map(num => num * 2);

// console.log('map', mapArray);

// // Filter.

// const filterArray = array.filter(num => num > 5)

// console.log('filter', filterArray);

// // Reduce.

// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 5)

// console.log('reduce', reduceArray);

const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

  let newArray = []
array.forEach(user => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
})
console.log(newArray);

const mapArray = array.map(user => {
    let { username } = user;
    return username + '?';
})
console.log(mapArray);

const filterArray = array.filter(user => {
    return user.team === "red";
})
console.log(filterArray);

const total = array.reduce((acc, user) => {
    return acc + user.score
}, 0);
console.log(total);

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     return num * 2;
// })

const answer = array.map(user => {
    user.items = user.items.map(item => {
      return item + "!"
    });
    return user;
  })
  console.log(answer);