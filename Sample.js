const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/test', (req, res) => {
    res.send('hello world test2');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})