#! /usr/bin/env node
const fs = require("fs");
console.log(process.argv);
const type = process.argv[2];
const name = process.argv[3];
const reactClass = require("./components/class");
const reactHook = require("./components/hook");

if (!fs.existsSync("./styles")) {
  fs.mkdirSync("./styles");
}
if (type === "class") {
  fs.writeFile(`${name}.js`, reactClass(name), (err) => {
    if (err) return console.log(err);
    console.log("Component Created");
  });
  fs.writeFile(`styles/${name}.scss`, "", (err) => {
    if (err) return console.log(err);
    console.log("Style Created");
  });
}
if (type === "hook") {
  fs.writeFile(`${name}.js`, reactHook(name), (err) => {
    if (err) return console.log(err);
    console.log("Hook Created");
  });
  fs.writeFile(`styles/${name}.scss`, "", (err) => {
    if (err) return console.log(err);
    console.log("Style Created");
  });
}
