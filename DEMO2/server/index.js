// import data from './data.json' assert {type: 'json'};
const data = require('./data.json')
const http = require("http");
const url = require('url');

http
  .createServer(function (req, res) {
    const { query, pathname } = url.parse(req.url, true);

    let answer = data;

    res.writeHead(200, { 
        "Content-Type": "text/html", 
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
    });
    res.end(JSON.stringify(answer));
  })
  .listen(8080);

console.log('Server is working now');
