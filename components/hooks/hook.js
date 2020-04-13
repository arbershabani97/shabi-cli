const createFile = require("../../services/createFile.service");
const createStyleFile = require("../../services/createStyleFile.service");
const checkFolder = require("../../services/folder.service");
const content = (name) => {
	name = name.split("/").pop();
	return `import "./styles/${name}.scss";

import React from "react";
  
const ${name} = () => {
    return (
        <div className="${name}">
          
        </div>
    );
}
  
export default ${name};`;
};

module.exports = async (name) => {
	checkFolder.components(name);

	await createFile(`src/components/${name}.js`, content(name));
	console.log("Hook Component Created");

	await createStyleFile(name, `src/components`);
}