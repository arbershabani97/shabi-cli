const checkAnswer = require("../helpers/answer");
const ask = require("../helpers/ask");
const createReactClassFormWithExtras = require("../../components/classes/extras/form.extras");

module.exports = async (name) => {
	console.log("\n---------------");

	const fields = await ask("\nWhat fields do you want to add to the form? (name, title, description)\n");
	const allFields = fields.split(",").map((field) => field.trim());
	if (!allFields.length) console.log("Your input was incorrect");
	console.log("\n---------------");

	createReactClassFormWithExtras(name, allFields);
};
