#! /usr/bin/env node
const fs = require("fs");
// console.log(process.argv);

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

// Args
const type = process.argv[2];
const name = process.argv[3] || "";

// Components - Classes
const createReactClass = require("./components/classes/class");
const createReactClassForm = require("./components/classes/form");
const createReactClassPage = require("./components/classes/page");
// Components - Hooks
const createReactHook = require("./components/hooks/hook");
const createReactHookForm = require("./components/hooks/form");
const createReactHookPage = require("./components/hooks/page");

// Styles
const createReactStyles = require("./components/styles");

// Components w/ Extras - Classes
const createReactClassWithExtras = require("./questions/classes/class");
const createReactClassFormWithExtras = require("./questions/classes/form");
const createReactClassPageWithExtras = require("./questions/classes/page");
// Components w/ Extras - Hooks
const createReactHookWithExtras = require("./questions/hooks/hook");
const createReactHookFormWithExtras = require("./questions/hooks/form");
const createReactHookPageWithExtras = require("./questions/hooks/page");

let extras = process.argv.find((arg) => arg === "--extra" || arg === "-E");
if (!type.startsWith("page")) createReactStyles(name);
if (extras) {
	if (type === "class") createReactClassWithExtras(name);
	if (type === "hook") createReactHookWithExtras(name);
	if (type.startsWith("form")) {
		if (type.endsWith("class")) return createReactClassFormWithExtras(name);
		if (!type.endsWith("class")) return createReactHookFormWithExtras(name);
	}
	if (type.startsWith("page")) {
		if (type.endsWith("class")) return createReactClassPageWithExtras(name);
		if (!type.endsWith("class")) return createReactHookPageWithExtras(name);
	}
} else {
	if (type === "class") createReactClass(name);
	if (type === "hook") createReactHook(name);
	if (type.startsWith("form")) {
		if (type.endsWith("class")) return createReactClassForm(name);
		if (!type.endsWith("class")) return createReactHookForm(name);
	}
	if (type.startsWith("page")) {
		if (type.endsWith("class")) return createReactClassPage(name);
		if (!type.endsWith("class")) return createReactHookPage(name);
	}
}
