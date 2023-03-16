// local module
const other = require("./other");
// console.log("🚀 ~ other:", other);

// const res = other.subtract(5, 4);
// console.log("🚀 ~ res:", res);

const http = require("http");
const server = http.createServer((req, res) => {
	res.end("Welcome to Full Stack Development");
});
const PORT = 5000;
server.listen(PORT);
// console.log("🚀 ~ http:", http);
console.log(`server is running at ${PORT}`);
