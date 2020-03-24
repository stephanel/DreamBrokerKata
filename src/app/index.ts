import express = require('express');
import bodyParser = require('body-parser');
import { TextAnalyzer } from './text-analyzer';

const config = {
    port: process.env.PORT || 3000
};

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/version', (req, res) => {
    const json = require('../package.json');
    res.send(json.version);
});

app.post('/analyze', (req, res) => {
    const analyzer = new TextAnalyzer();

    const text = req.body.text;

    const result = analyzer.analyzeText(text);

    res.json(result);
});

app.listen(config.port, () => {
    console.log('Server listening');
})