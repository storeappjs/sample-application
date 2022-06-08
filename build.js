const fs = require("fs");
const { join } = require("path");

console.log("Building..");

fs.writeFileSync(
  join(STOREAPP.dirname, "index.js"),
  `console.log("Hello, World!"); /*print hello world*/`
);
