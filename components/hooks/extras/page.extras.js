const createFile = require("../../../services/createFile.service");
const createStyleFile = require("../../../services/createStyleFile.service");
const checkFolder = require("../../../services/folder.service");
const {
	useStateAndOrEffect,
	useStateString,
	useEffectString
} = require("../helpers/hook.helpers");
const {
	contentApp
} = require("../helpers/page.helpers");

const content = (name, useState, useEffect) => {
	name = name.split("/").pop();
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

module.exports = async (name, useState, useEffect) => {
	checkFolder.pages(name);

	const Name = name.split("/").pop().capitalize();
	const folder = name.split("/").slice(0, -1).join("/");

	await createFile(`src/App.sample.js`, contentApp(Name, useState, useEffect));
	console.log(`Check App.sample.js on adding the route`);

	await createFile(`src/pages/${folder}/${Name}.page.js`, content(Name, useState, useEffect));
	console.log(`${Name} Page Created`);

	name = `${folder}/${Name}.page`;
	await createStyleFile(name, `src/pages`);

	process.exit();
};