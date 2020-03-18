import express = require('express');
import bodyParser = require('body-parser');
import { TextAnalyzer } from './text-analyzer';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.post('/analyze', (req, res) => {
    const analyzer = new TextAnalyzer();

    const text = req.body.text;

    const result = analyzer.analyzeText(text);

    res.json(result);
});

app.listen(3000, () => {
    console.log('Server listening');
})