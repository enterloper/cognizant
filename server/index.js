//Main starting for application.
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const mongoose = require('mongoose');
const app = express();

//App setup



//Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);