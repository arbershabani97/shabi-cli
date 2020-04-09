const checkAnswer = require("../helpers/answer");
const ask = require("../helpers/ask");
const createReactHookPageWithExtras = require("../../components/hooks/extras/page.extras");

module.exports = async (name) => {
	console.log("\n---------------");

	const addUseState = await ask("\nWould you like to add state? (yes, no)\n");
	const useState = checkAnswer(addUseState);
	if (!addUseState) console.log("yes");
	console.log("\n---------------");

	const addUseEffect = await ask("\nWould you like to add useEffect? (yes, no)\n");
	const useEffect = checkAnswer(addUseEffect);
	if (!addUseEffect) console.log("yes");
	console.log("\n---------------");

	createReactHookPageWithExtras(name, useState, useEffect);
};
