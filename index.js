// core module
// const http = require("http");

// third party module -> underscore
const _ = require("underscore");

// const server = http.createServer(function (req, res) {
// 	// console.log(`server is running`);
// });

// server.listen(5000);

const stooges = [
	{ name: "moe", age: 40 },
	{ name: "larry", age: 50 },
	{ name: "curly", age: 60 },
];
const result = _.pluck(stooges, "age");
console.log("🚀 ~ result:", result);
