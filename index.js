#! /usr/bin/env node
 //--no-warnings

const fs = require("fs");
// console.log(process.argv);

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.toLowerFirst = function () {
	return this.charAt(0).toLowerCase() + this.slice(1);
};

// Args
const type = process.argv[2];
const name = process.argv[3] || "";

const createProject = require("./projects/project");
// Components - Classes
const createReactClass = require("./components/classes/class");
const createReactClassForm = require("./components/classes/form");
const createReactClassPage = require("./components/classes/page");
const createReactClassResource = require("./components/classes/resource");
// Components - Hooks
const createReactHook = require("./components/hooks/hook");
const createReactHookForm = require("./components/hooks/form");
const createReactHookPage = require("./components/hooks/page");
const createReactHookResource = require("./components/hooks/resource");

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
// if (!type.startsWith("page")) createReactStyles(name);
if (extras) {
	if (type === "class") createReactClassWithExtras(name);
	if (type === "hook") createReactHookWithExtras(name);
	if (type.startsWith("form")) {
		if (type.endsWith("class")) createReactClassFormWithExtras(name);
		if (!type.endsWith("class")) createReactHookFormWithExtras(name);
	}
	if (type.startsWith("page")) {
		if (type.endsWith("class")) createReactClassPageWithExtras(name);
		if (!type.endsWith("class")) createReactHookPageWithExtras(name);
	}
} else {
	if (type === "class") createReactClass(name);
	if (type === "hook") createReactHook(name);
	if (type.startsWith("form")) {
		if (type.endsWith("class")) createReactClassForm(name);
		if (!type.endsWith("class")) createReactHookForm(name);
	}
	if (type.startsWith("page")) {
		if (type.endsWith("class")) createReactClassPage(name);
		if (!type.endsWith("class")) createReactHookPage(name);
	}
	if (type.startsWith("resource")) {
		if (type.endsWith("class")) createReactClassResource(name);
		if (!type.endsWith("class")) createReactHookResource(name);
	}
}
if (type === "project") createProject(name)

// process.exit();