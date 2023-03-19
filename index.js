// const other = require("./other");
const http = require("http");
// const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if ((req.url = "/")) {
		// fs.readFile("data.txt", (err, data) => {
		// 	if (err) {
		// 		res.write("Failed to read data !!!");
		// 		res.end();
		// 	} else {
		// 		res.write(data);
		// 		res.end();
		// 	}
		// });

		// const data = fs.readFileSync("data.txt");
		// res.write(data);
		// res.end();

		fs.writeFile("first.txt", "I am a pull stack developer", (err) => {
			if (err) {
				res.write("Data failed to write");
				res.end();
			} else {
				res.write("data written successfully");
				res.end();
			}
		});
	}
});

// console.log(url);
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);
