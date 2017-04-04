//Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

//Point static path to dist
app.use(express.static(path.join(__dirname,'dist')));

//Catch all routes and return index file
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

/**
* Get port from environment and store in express
**/
const port = process.env.PORT || 9003;
app.set('port', port);

/**
* create HTTP server
**/
const server = http.createServer(app);

/**
* Listen on provided port
**/
server.listen(port, () => console.log(`Angular2 app running on localhost:${port}`));
