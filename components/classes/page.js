const createFile = require("../../services/createFile.service");
const createStyleFile = require("../../services/createStyleFile.service");
const {
	contentApp
} = require("./helpers/page.helpers");
const checkFolder = require("../../services/folder.service");

const content = (name) => {
	name = name.split("/").pop();
	return `import "./styles/${name}.page.scss";

import React, {Component} from "react";

class ${name} extends Component {
    render(){
        return (
            <div className="${name}">
        
            </div>
        );
    }
}

export default ${name};`;
};

module.exports = async (name) => {
	checkFolder.pages(name);

	const Name = name.split("/").pop().capitalize();
	const folder = name.split("/").slice(0, -1).join("/");

	await createFile(`src/App.sample.js`, contentApp(Name));
	console.log(`Check App.sample.js on adding the route`);

	await createFile(`src/pages/${folder}/${Name}.page.js`, content(Name));
	console.log(`${Name} Page Created`);

	name = `${folder}/${Name}.page`;
	await createStyleFile(name, `src/pages`);

	process.exit();
};