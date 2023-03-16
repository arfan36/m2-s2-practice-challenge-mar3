// local module
const other = require("./other");
// console.log("🚀 ~ other:", other);

// const res = other.subtract(5, 4);
// console.log("🚀 ~ res:", res);

const http = require("http");
const server = http.createServer((req, res) => {
	// console.log(req.url);
	if (req.url == "/") {
		res.writeHead(200, { "Content-type": "text/html" });
		res.write("<p>Welcome to Full Stack Development</p>");
		res.end();
	} else if (req.url == "/app-json") {
		res.writeHead(200, { "Content-type": "application/json" });
		res.write(JSON.stringify({ course: "ACC" }));
		res.end();
	} else if (req.url == "/contact") {
		res.writeHead(200, { "Content-type": "text/html" });
		res.write("<p>This is Contact Page</p>");
		res.end();
	}
	if (req.url == "/about-us") {
		res.writeHead(200, { "Content-type": "text/html" });
		res.write("<p>This is About Us Page</p>");
		res.end();
	}
	// res.end("Welcome to Full Stack Development");
});
const PORT = 5000;
server.listen(PORT);
// console.log("🚀 ~ http:", http);
console.log(`server is running at ${PORT}`);
