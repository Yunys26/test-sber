const { default: axios } = require('axios');
// Подключение express
const express = require('express');
// const {request, response} = require('express');
// Создаем сервер/приложение
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Привет мир'
    });
    req = axios.get('https://jobs.github.com/positions.json?search=node').then( res => console.log(res) )
});

app.post('/', (req, res) => {
    res
})

app.listen(9999, err => {
    if (err) throw Error (err);
    console.log("Server start")
})

// app.post('/city', (req, res) => {
//     console.log("GET DATA")
// });

// app.listen( 9999, err => {
//     if (err) throw Error (err);
//     console.log("Server start")
// })