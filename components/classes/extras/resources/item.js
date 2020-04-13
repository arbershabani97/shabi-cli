const createFile = require("../../../../services/createFile.service");
const createStyleFile = require("../../../../services/createStyleFile.service");
const checkFolder = require("../../../../services/folder.service");

const stateString = (fields) => {
	if (!fields.length) return "";
	return `
    state={
        ${fields.map((field) => field + `: this.props.${field} || ""`).join(`,
        `)}
    };`;
};
const destructureFieldsString = (fields) => {
	if (!fields.length) return "";
	return `
        const {${fields.join(", ")}} = this.props;
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
    render(){${destructureFieldsString(fields)}
        return (
            <div className="${name}">
                ${fieldsString(fields)}
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
