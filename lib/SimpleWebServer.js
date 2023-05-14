const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require("path");

const port = 8080;

const app = express();

app.all("/service", (request, response, next) => {
	if (request.method === "HEAD") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end();
	} else if (request.method === "GET") {
		response.setHeader('Content-Type', 'application/json; charset=UTF-8');
		response.write(JSON.stringify({msg: "HTTP GET request received"}));
		response.end();
	} else if (request.method === "POST") {
		let postdata = '';
		request.on('data', (data) => { postdata += data; });
		request.on('end', () => {
			let msg = JSON.parse(postdata);
			response.setHeader('Content-Type', 'application/json; charset=UTF-8');
			response.write(JSON.stringify(msg));
			response.end();
		});
	} else if (request.method === "PUT") {
		let postdata = '';
		request.on('data', (data) => { postdata += data; });
		request.on('end', () => {
			let msg = JSON.parse(postdata);
			response.setHeader('Content-Type', 'application/json; charset=UTF-8');
			response.write(JSON.stringify(msg));
			response.end();
		});
	} else if (request.method === "DELETE") {
		response.setHeader('Content-Type', 'application/json; charset=UTF-8');
		response.write(JSON.stringify({msg: "HTTP DELETE request received"}));
		response.end();
	}
	next();
});

const resourcePath = path.join(__dirname, '../resources');

app.use(express.static(resourcePath, {'index': ['index.html']}));

const server = http.createServer(app).listen(port);
console.log("Simple Web Server listening on port "+port);