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
const destructureFieldsString = (fields, name) => {
	if (!fields.length) return "";
    return `
        const {${name}} = this.props;
        const {${fields.join(", ")}} = ${name};
`;
};
const fieldsString = (fields) => {
	if (!fields.length) return "";
    const inputs = fields.map((field) => `<p>
                    ${field}: <span>{${field}}</span>
                </p>`);
	return `${inputs.join(`
                `)}`;
};

const content = (name, fields) => {
	name = name.split("/").pop();
    const onlyFields = fields.filter(field=> field !== "id");
    const lowerName = name.slice(1).toLowerFirst();
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

class ${name} extends Component {
    shouldComponentUpdate(prevProps) {
		const {${fields.join(", ")}} = this.props;
        if (${fields.length > 1 ? fields.slice(0,-1).map(field=>`
            prevProps.${field} !== ${field} || `).join(''): ''}
            prevProps.${fields[fields.length - 1]} !== ${fields[fields.length - 1]}
        ) return true;
		return false;
	}

    handleClick = e => {
		const {${lowerName}, onToggle, setSelection} = this.props;
		onToggle(e);
		setSelection(${lowerName});
    };
    
    render(){${destructureFieldsString(onlyFields, lowerName)}
        return (
            <div className="${name} box">
                ${fieldsString(onlyFields)}
				<div>
					<button onClick={this.handleClick} tab="show" type="button">
						Show
					</button>
					<button onClick={this.handleClick} tab="edit" type="button">
						Edit
					</button>
					<button onClick={this.handleClick} tab="delete" type="button">
						Delete
					</button>
				</div>
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
