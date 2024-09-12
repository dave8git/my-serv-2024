const express = require('express');
const path = require('path'); 

const app = express(); 

app.use('/user/*', (req, res,next) => {
    res.send('Żeby tutaj wejść, musisz się najpierw zalogować! Tyle w temacie ;)')
    next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About me</h1>');
});


app.use((req, res) => {
    res.status(404).send('404 not found...');
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});