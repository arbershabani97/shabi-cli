#! /usr/bin/env node
const fs = require("fs");
// console.log(process.argv);

// Args
const type = process.argv[2];
const name = process.argv[3];
// Components
const createReactClass = require("./components/class");
const createReactHook = require("./components/hook");
const createReactStyles = require("./components/styles");
// Components w/ Extras
const createReactClassWithExtras = require("./extras/class");
const createReactHookWithExtras = require("./extras/hook");

let extras = process.argv.find((arg) => arg === "--extras" || arg === "-E");
createReactStyles(name);
if (extras) {
	if (type === "class") createReactClassWithExtras(name);
	if (type === "hook") createReactHookWithExtras(name);
} else {
	if (type === "class") createReactClass(name);
	if (type === "hook") createReactHook(name);
}
