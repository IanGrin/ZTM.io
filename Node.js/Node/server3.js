const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('getting root');
});

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

app.delete('/profile', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
});

app.listen(3000);

app.use(express.urlencoded({extended: false}));
app.use(express.json());