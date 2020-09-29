
// Подключение express
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
// Подклчючения CORS
const cors = require('cors');
// Создаем сервер/приложение
const app = express();
// Порт на котором работает API
const port = 9999;

app.use(cors());

app.get('/', (req, res) => {

    console.log(req.query);

    request(`https://jobs.github.com/positions.json?search=${req.query.input}`, (err, response, body) => {
        
        if (err) return res.status(500).send({message: err});
        
        return res.send(body);
    });
});

app.listen(port, err => {

    if (err) throw Error (err);
    
    console.log(`Server start, port:${port}`)
})
