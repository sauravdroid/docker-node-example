'use strict';

const express = require('express');

// Constants
const port = 8000
const host = '0.0.0.0'

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, host);
console.log(`Running server in port http://${host}:${port}`)