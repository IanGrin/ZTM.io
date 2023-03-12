var database = [
    {
        username: "ian",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning."
    },
    {
        username: "Sally",
        timeline: "Javascript is soooo cool!"
    }
];



function signIn(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username  === username && database[i].password === password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password");
        }
    }
    
    // if (user === database[0].username && pass === database[0].password) {
    //     console.log(newsFeed);
    // } else {
    //     alert("Sorry, Wrong username and password!")
    // }
} 

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats you password?")

signIn(userNamePrompt, passwordPrompt);