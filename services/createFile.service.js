const fs = require("fs").promises;
module.exports = async (fileName, content) => {
	try {
		await fs.writeFile(fileName, content);
	} catch (err) {
		console.log(err);
	}
};
