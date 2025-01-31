const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('We can do it now and today. Yay!! 🌟');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});