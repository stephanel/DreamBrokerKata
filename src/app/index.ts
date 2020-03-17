import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(3000, () => {
    console.log('Server listening');
})