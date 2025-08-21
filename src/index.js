const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

const data = fs.readFileSync(inputPath, "utf8");

let total = 0;
const lines = data.trim().split("\n");

for (let line of lines) {
  const parts = line.trim().split(" ");
  const number = parseInt(parts[1], 10);
  total += number;
}

fs.writeFileSync(outputPath, total.toString(), "utf8");

console.log(total);
