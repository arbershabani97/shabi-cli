const createFile = require("../../../services/createFile.service");
const createStyleFile = require("../../../services/createStyleFile.service");
const {
	stateString,
	componentDidMountString,
	componentDidUpdateString
} = require("../helpers/class.helpers");
const {
	contentApp
} = require("../helpers/page.helpers");
const checkFolder = require("../../../services/folder.service");

const content = (name, state, componentDidMount, componentDidUpdate) => {
	name = name.split("/").pop();
	return `import "./styles/${name}.page.scss";
    
import React, {Component} from "react";
  
class ${name} extends Component {${stateString(state)}${componentDidMountString(componentDidMount)}${componentDidUpdateString(componentDidUpdate)}
    render(){
        return (
            <div className="${name}">
        
            </div>
        );
    }
}

export default ${name};`;
};
module.exports = async (name, state, componentDidMount, componentDidUpdate) => {
	checkFolder.pages(name);

	const Name = name.split("/").pop().capitalize();
	const folder = name.split("/").slice(0, -1).join("/");

	await createFile(`src/App.sample.js`, contentApp(Name, state, componentDidMount, componentDidUpdate));
	console.log(`Check App.sample.js on adding the route`);

	await createFile(`src/pages/${folder}/${Name}.page.js`, content(Name, state, componentDidMount, componentDidUpdate));
	console.log(`${Name} Page Created`);

	name = `${folder}/${Name}.page`;
	await createStyleFile(name, `src/pages`);

	process.exit();
};