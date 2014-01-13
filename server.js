"use strict";

var http = require("http"),
	nodeStatic = require("node-static"),
	serverOptions = {headers: {"Cache-Control": "no-cache, must-revalidate"}};


var staticServer = new nodeStatic.Server(".", serverOptions);

http.createServer(clientRequestHandler).listen(8080);

console.info("Connected server to port", 8080);

function clientRequestHandler(request, response) {
	request.addListener("end", requestEndedListener).resume();
	
	function requestEndedListener() {
		staticServer.serve(request, response);
	}
}
