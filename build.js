const fs = require("fs");
const { join } = require("path");

console.log("Building..");

fs.writeFileSync(
  join(STOREAPP.dirname, "build.js"),
  `console.log("Hello, World!"); /*print hello world*/`
);
