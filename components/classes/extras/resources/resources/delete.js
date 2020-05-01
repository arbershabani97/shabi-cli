const createFile = require("../../../../../services/createFile.service");
const createStyleFile = require("../../../../../services/createStyleFile.service");
const checkFolder = require("../../../../../services/folder.service");
const deleteStyle = require("./delete.style");

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
    const inputs = fields.map((field) => `<p>
                    ${field}: <span>{${field}}</span>
                </p>`);
	return `${inputs.join(`
                `)}`;
};

const content = (name, fields) => {
    name = name.split("/").pop();
    const onlyFields = fields.filter(field=> field !== "id");
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

// import {delete${name.slice(6)}} from "{{{store/API/${name.slice(6).toLowerFirst()}s}}}";

class ${name} extends Component {
    shouldComponentUpdate(prevProps){
        const {id} = this.props;
        if (prevProps.id !== id) return true;
        return false;
    }

    handleClick = e => {
        e.preventDefault();
        const {id} = this.props;
        // delete${name.slice(6)}({id});
    }

    render(){
        const {${onlyFields.join(", ")}} = this.props;
        return (
            <div className="${name} box">
                ${fieldsString(onlyFields)}
                <button onClick={this.handleClick} type="button">
                    Delete
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

	await createStyleFile(fileName, `src/components`, deleteStyle(name));
};
