const fs = require("fs");

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
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

class ${name} extends Component {${stateString(fields)}

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        
    }

    render(){${destructureFieldsString(fields)}
        return (
            <form className="${name}" onSubmit={this.handleSubmit}>
                ${fieldsString(fields)}
            </form>
        );
    }
}

export default ${name};`;
};

module.exports = (name, fields) =>
	fs.writeFile(`${name}.js`, content(name, fields), (err) => {
		if (err) return console.log(err);
		console.log("Component Created");
		process.exit();
	});
