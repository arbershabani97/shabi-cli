const createFile = require("../../../../../services/createFile.service");
const createStyleFile = require("../../../../../services/createStyleFile.service");
const checkFolder = require("../../../../../services/folder.service");

const stateString = (fields) => {
	if (!fields.length) return "";
	return `
    state={
        ${fields.map((field) => field + ': ""').join(`,
        `)}
    };`;
};
const destructureFieldsString = (fields) => {
	if (!fields.length) return "";
	return `
        const {${fields.join(", ")}} = this.state;
`;
};
const fieldsString = (fields) => {
	if (!fields.length) return "";
	const inputs = fields.map((field) => `<h3 className="lead mb-4">{${field}}</h3>`);
	return `${inputs.join(`
                `)}`;
};

const content = (name, fields) => {
	name = name.split("/").pop();
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

class ${name} extends Component {

    handleClick = e => {
        e.preventDefault();
        const {id} = this.props;
        delete${name.slice(6)}({id});
    }

    render(){
        const {${fields.join(", ")}} = this.props;
        return (
            <div className="${name}">
                ${fieldsString(fields)}
                <button className="btn btn-danger" onClick={this.handleClick}>
                    Delete Project
                </button>
            </div>
        );
    }
}

export default ${name};`;
};

module.exports = async (fileName, name, fields) => {
	checkFolder.components(fileName);

	await createFile(`src/components/${fileName}.js`, content(name, fields));
	console.log("Class Component Created");

	await createStyleFile(fileName, `src/components`);
};
