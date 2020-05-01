const createFile = require("../../../../../services/createFile.service");
const createStyleFile = require("../../../../../services/createStyleFile.service");
const checkFolder = require("../../../../../services/folder.service");

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
        const {${fields.join(", ")}} = this.state;
`;
};
const fieldsString = (fields) => {
    if (!fields.length) return "";
	const inputs = fields.filter(field=> field!=="id").map((field) => `<input name="${field}" onChange={this.handleChange} placeholder="${field}" type="text" value={${field}} />`);
	return `${inputs.join(`
                `)}`;
};

const content = (name, fields) => {
    name = name.split("/").pop();
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

// import {put${name.slice(4)}} from "{{{store/API/${name.slice(4).toLowerFirst()}s}}}";

class ${name} extends Component {${stateString(fields)}

    componentDidUpdate(prevProps) {
        const {${fields.join(", ")}} = this.props;
        if (${fields.length > 1 ? fields.slice(0,-1).map(field=>`
            prevProps.${field} !== ${field} || `).join(''): ''}
            prevProps.${fields[fields.length - 1]} !== ${fields[fields.length - 1]}
        ) this.setState({${fields.join(", ")}});
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
		const {${fields.join(", ")}} = this.state;
        // put${name.slice(4)}({${fields.join(", ")}});
    }

    render(){${destructureFieldsString(fields.filter(field=> field!=="id"))}
        return (
            <form className="${name}" onSubmit={this.handleSubmit}>
                ${fieldsString(fields)}
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
