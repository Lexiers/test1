const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Middleware для обработки данных формы
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const user = req.body.username;
    if (typeof user === "undefined") {
        console.log("username is undefined");
    }
    res.send(`Привет, ${user} ! Добро пожаловать на сервер!`);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});