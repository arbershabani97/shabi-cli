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
	const inputs = fields.map((field) => `<input name="${field}" onChange={this.handleChange} placeholder="${field}" type="text" value={${field}} />`);
	return `${inputs.join(`
                `)}`;
};

const content = (name, fields) => {
    name = name.split("/").pop();
    const onlyFields = fields.filter(field=> field !== "id");
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

// import {post${name.slice(6)}} from "{{{store/API/${name.slice(6).toLowerFirst()}s}}}";

class ${name} extends Component {${stateString(onlyFields)}

    shouldComponentUpdate(prevProps, prevState) {
        const {${onlyFields.join(", ")}} = this.state;
        if (${onlyFields.length > 1 ? onlyFields.slice(0,-1).map(field=>`
            prevState.${field} !== ${field} || `).join(''): ''}
            prevState.${onlyFields[onlyFields.length - 1]} !== ${onlyFields[onlyFields.length - 1]}
        ) return true;
        return false;
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        const {${onlyFields.join(", ")}} = this.state;
        // post${name.slice(6)}({${onlyFields.join(", ")}});
    }

    render(){${destructureFieldsString(onlyFields)}
        return (
            <form className="${name}" onSubmit={this.handleSubmit}>
                ${fieldsString(onlyFields)}
                <button type="submit">Submit</button>
            </form>
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
