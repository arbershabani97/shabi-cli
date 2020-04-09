const fs = require("fs");
const {useStateAndOrEffect, useStateString, useEffectString} = require("../helpers/hook.helpers");
const {contentApp} = require("../helpers/page.helpers");

const content = (name, useState, useEffect) => {
	return `import "./styles/${name}.page.scss";

import React${useStateAndOrEffect(useState, useEffect)} from "react";
  
const ${name} = () => {${useStateString(useState)}${useEffectString(useEffect)}
    return (
        <div className="${name}">
          
        </div>
    );
}
  
export default ${name};`;
};

module.exports = (name, useState, useEffect) => {
	if (!fs.existsSync("./src")) fs.mkdirSync("./src");
	if (!fs.existsSync("./src/pages")) fs.mkdirSync("./src/pages");
	if (!fs.existsSync("./src/pages/styles")) fs.mkdirSync("./src/pages/styles");

	const Name = name.capitalize();

	fs.writeFile(`src/App.sample.js`, contentApp(Name, useState, useEffect), (err) => {
		if (err) return console.log(err);
		console.log(`Check App.sample.js on adding the route`);
		process.exit();
	});

	fs.writeFile(`src/pages/${Name}.page.js`, content(Name, useState, useEffect), (err) => {
		if (err) return console.log(err);
		console.log(`${Name} Page Created`);
		process.exit();
	});
	fs.writeFile(`src/pages/styles/${Name}.page.scss`, "", (err) => {
		if (err) return console.log(err);
		// console.log("Style Created");
		process.exit();
	});
};
