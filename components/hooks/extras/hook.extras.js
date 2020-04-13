const createFile = require("../../../services/createFile.service");
const createStyleFile = require("../../../services/createStyleFile.service");
const checkFolder = require("../../../services/folder.service");
const {
	useStateAndOrEffect,
	useStateString,
	useEffectString
} = require("../helpers/hook.helpers");

const content = (name, useState, useEffect) => {
	name = name.split("/").pop();
	return `import "./styles/${name}.scss";

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
	checkFolder.components(name);

	await createFile(`src/components/${name}.js`, content(name, useState, useEffect));
	console.log("Hook Component Created");

	await createStyleFile(name, `src/components`);

	process.exit();
}