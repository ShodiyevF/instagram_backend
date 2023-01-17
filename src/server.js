const express = require('express')
const { uniqRow } = require('./lib/pg')
const app = express()

app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/login', async (req, res) => {
    try {
        console.log(req.body.username);
        console.log(req.body.password);
        await uniqRow('insert into users (user_username, user_password) values ($1, $2)', req.body.username, req.body.password)
        return res.json({
            status: 200
        })
    } catch (error) {
        console.log(error.message, '/login')
    }
})

app.listen(4001, console.log(4001))