const fs = require("fs");
const createFile = require("../services/createFile.service");
const checkFolder = require("../services/folder.service");
module.exports = async (name) => {
	checkFolder.styles();

	await createFile(`styles/${name}.scss`, "");
	console.log("Style Created");
};