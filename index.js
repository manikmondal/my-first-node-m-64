const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World i am manik how ar you')
})

const users = [
    { id: 1, name: 'm', email: 'm@hotmail.com', phone: '01700000000' },
    { id: 2, name: 'b', email: 'b@hotmail.com', phone: '01700000000' },
    { id: 3, name: 'c', email: 'c@hotmail.com', phone: '01700000000' },
    { id: 4, name: 'd', email: 'd@hotmail.com', phone: '01700000000' },
    { id: 5, name: 'e', email: 'e@hotmail.com', phone: '01700000000' },
    { id: 6, name: 'f', email: 'f@hotmail.com', phone: '01700000000' },
    { id: 7, name: 'g', email: 'g@hotmail.com', phone: '01700000000' },
    { id: 8, name: 'h', email: 'h@hotmail.com', phone: '01700000000' },
]

app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Example app listening on port`, port);
})