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
	const singleName = name.slice(4, -1).toLowerFirst();
	const lowerName = name.slice(4).toLowerFirst();
	const Name = name.slice(4, -1);
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

// import {get${name.slice(4)}} from "{{{store/API/${name.slice(4).toLowerFirst()}}}}";

import ${Name} from "../_${Name}";

class ${name} extends Component {
	componentDidMount() {
		// get${name.slice(4)}();
    }
    
	shouldComponentUpdate(prevProps) {
        const {${lowerName}} = this.props;
        if (${lowerName}.length !== prevProps.${lowerName}.length) return true;
        return false;
    }
    
    render(){
        const {${lowerName}, onToggle, setSelection} = this.props;
        return (
            <div className="${name}">
                {${lowerName}.map(${singleName} => (
                    <${Name} key={${singleName}.id} ${singleName}={${singleName}} onToggle={onToggle} setSelection={setSelection} />
                ))}
            </div>
        );
    }
}
const mapStateToProps = ({${lowerName}}) => ({${lowerName}});

export default connect(mapStateToProps)(${name});`;
};

module.exports = async (fileName, name, fields) => {
	checkFolder.components(fileName);

	await createFile(`src/components/${fileName}.js`, content(name, fields));
	console.log("Class Component Created");

	await createStyleFile(fileName, `src/components`);
};
