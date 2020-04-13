const createFile = require("../../../../services/createFile.service");
const createStyleFile = require("../../../../services/createStyleFile.service");
const checkFolder = require("../../../../services/folder.service");
const classResourceComponent = require("../../class");
const createResourceComponent = require("./resources/create");
const deleteResourceComponent = require("./resources/delete");
const editResourceComponent = require("./resources/edit");
const listResourceComponent = require("./resources/list");
const showResourceComponent = require("./resources/show");
const camelToKebab = require("../../../../services/camelToKebab.service");

module.exports = async (name, fields) => {
	// checkFolder.components(name);

	// await createFile(`src/components/${name}.js`, content(name, state, componentDidMount, componentDidUpdate));
	// console.log("Class Component Created");

	let Name = name.split("/").pop().capitalize();
	if (!Name.endsWith("s")) Name = Name + "s";
	const folderName = name
		.split("/")
		.map((_name) => camelToKebab(_name.toLowerFirst()))
		.join("/");
	const nameSingle = Name.slice(0, -1);

	const allFields = fields.split(",").map((field) => field.trim());

	// await createResourceComponent(`${folderName}/${Name}`, Name, state, componentDidMount, componentDidUpdate);
	await classResourceComponent(`${folderName}/_Header`);
	// await createResourceComponent(`${folderName}/${nameSingle}`);
	await createResourceComponent(`${folderName}/resources/Create${nameSingle}`, `Create${nameSingle}`, allFields);
	await deleteResourceComponent(`${folderName}/resources/Delete${nameSingle}`, `Delete${nameSingle}`, allFields);
	await editResourceComponent(`${folderName}/resources/Edit${nameSingle}`, `Edit${nameSingle}`, allFields);
	await listResourceComponent(`${folderName}/resources/List${Name}`, `List${Name}`, allFields);
	await showResourceComponent(`${folderName}/resources/Show${nameSingle}`, `Show${nameSingle}`, allFields);

	process.exit();
};
