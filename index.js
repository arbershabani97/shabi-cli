#! /usr/bin/env node
const fs = require("fs");
// console.log(process.argv);

// Args
const type = process.argv[2];
const name = process.argv[3];
// Components
const createReactClass = require("./components/classes/class");
const createReactHook = require("./components/hooks/hook");
const createReactClassForm = require("./components/classes/form");
// Styles
const createReactStyles = require("./components/styles");
// Components w/ Extras
const createReactClassWithExtras = require("./questions/classes/class");
const createReactHookWithExtras = require("./questions/hooks/hook");
const createReactClassFormWithExtras = require("./questions/classes/form");

let extras = process.argv.find((arg) => arg === "--extra" || arg === "-E");
createReactStyles(name);
if (extras) {
	if (type === "class") createReactClassWithExtras(name);
	if (type === "hook") createReactHookWithExtras(name);
	if (type.startsWith("form")) {
		if (type.endsWith("class")) return createReactClassFormWithExtras(name);
	}
} else {
	if (type === "class") createReactClass(name);
	if (type === "hook") createReactHook(name);
	if (type.startsWith("form")) {
		if (type.endsWith("class")) return createReactClassForm(name);
	}
}
