const checkAnswer = require("./helpers/answer");
const ask = require("./helpers/ask");
const createReactClassWithExtras = require("../components/extras/class");

const extrasFunctionality = async (name) => {
	console.log("\n---------------");

	const addState = await ask("\nWould you like to add state? (yes, no)\n");
	const state = checkAnswer(addState);
	if (!addState) console.log("yes");
	console.log("\n---------------");

	const addComponentDidMount = await ask("\nWould you like to add componentDidMount? (yes, no)\n");
	const componentDidMount = checkAnswer(addComponentDidMount);
	if (!addComponentDidMount) console.log("yes");
	console.log("\n---------------");

	const addComponentDidUpdate = await ask("\nWould you like to add componentDidUpdate? (yes, no)\n");
	const componentDidUpdate = checkAnswer(addComponentDidUpdate);
	if (!addComponentDidUpdate) console.log("yes");
	console.log("\n---------------");

	createReactClassWithExtras(name, state, componentDidMount, componentDidUpdate);
};

module.exports = extrasFunctionality;
