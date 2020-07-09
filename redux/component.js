const mainResourceComponent = require("./main");
const itemResourceComponent = require("./item");
const createResourceComponent = require("./resources/create");
const deleteResourceComponent = require("./resources/delete");
const editResourceComponent = require("./resources/edit");
const listResourceComponent = require("./resources/list");
const showResourceComponent = require("./resources/show");
const camelToKebab = require("../../../../services/camelToKebab.service");

module.exports = async (name, fields) => {
	let Name = name.split("/").pop().capitalize();
	if (!Name.endsWith("s")) Name = Name + "s";
	const folderName = name
		.split("/")
		.map((_name) => camelToKebab(_name.toLowerFirst()))
		.join("/");
	const nameSingle = Name.slice(0, -1);

	const allFields = fields.split(",").map((field) => field.trim());

	if(!allFields.includes("id")) allFields.unshift("id");

	await mainResourceComponent(`${folderName}/${Name}`, Name, allFields);
	await itemResourceComponent(`${folderName}/_${nameSingle}`, `_${nameSingle}`, allFields);
	await createResourceComponent(`${folderName}/resources/Create${nameSingle}`, `Create${nameSingle}`, allFields);
	await deleteResourceComponent(`${folderName}/resources/Delete${nameSingle}`, `Delete${nameSingle}`, allFields);
	await editResourceComponent(`${folderName}/resources/Edit${nameSingle}`, `Edit${nameSingle}`, allFields);
	await listResourceComponent(`${folderName}/resources/List${Name}`, `List${Name}`, allFields);
	await showResourceComponent(`${folderName}/resources/Show${nameSingle}`, `Show${nameSingle}`, allFields);

	process.exit();
};