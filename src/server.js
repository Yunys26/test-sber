const { default: axios } = require('axios');
// Подключение express
const express = require('express');
const request = require('request');
const cors = require('cors');
// Создаем сервер/приложение
const app = express();
const port = 9999;

app.use(cors());

app.get('/', (req, res) => {
    console.log(req.query)
    request(`https://jobs.github.com/positions.json?search=${req.query.input}`, (err, response, body) => {
        if (err) return res.status(500).send({message: err});
        return res.send(body);
    })
});

// app.post('/api/work', (req, res) => {
//     console.log("Completed post");
//     res.send(() => {
//         axios.get(`https://jobs.github.com/positions.json?search=node`)
//             .then( res => console.log(res) )
//             .catch( err => console.log(err) )
//     });
//     // `https://jobs.github.com/positions.json?search=${action.payload}`
// })

app.listen(port, err => {
    if (err) throw Error (err);
    console.log(`Server start, port:${port}`)
})
