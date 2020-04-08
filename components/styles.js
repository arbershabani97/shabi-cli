const fs = require("fs");
module.exports = (name) => {
	if (!fs.existsSync("./styles")) fs.mkdirSync("./styles");

	fs.writeFile(`styles/${name}.scss`, "", (err) => {
		if (err) return console.log(err);
		// console.log("Style Created");
	});
};
