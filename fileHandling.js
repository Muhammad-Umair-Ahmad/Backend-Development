const fs = require("fs");

// fs.writeFileSync("test.txt", "Hey There Bitch");

// fs.writeFile("./test.txt", "Hello", (err) => {});

// console.log(fs.readFileSync("test.txt", "utf-8"));
// fs.readFile("test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(result);
// });

fs.appendFile("./test.txt", `\n${Date.now().toLocaleString()}`, (err) => {});
// fs.mkdirSync("my-logs/a/b", { recursive: true });
