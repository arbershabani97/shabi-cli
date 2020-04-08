const negativeAnswers = ["no", "n", "nope", "nah", "noo", "nooo"];

const checkAnswer = (answer) => {
	return !negativeAnswers.find((negative) => answer === negative);
};

module.exports = checkAnswer;
