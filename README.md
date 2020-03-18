## How to

Install packages using npm:
```bash
npm install
```

Run tests:
```bash
npm test
or
npm run test:watch
```

Start server using npm:
```bash
npm start
```

Then, load http://localhost:3000 in your browser or use your favorite HTTP client.

## Demo on Heroku:
```bash
curl --header "Content-Type: application/json" \
--request POST \
--data '{"text":"hello 2 times  "}' \
https://mysterious-taiga-82165.herokuapp.com/analyze
```
