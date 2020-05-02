const createFile = require("../../../../../services/createFile.service");
const createStyleFile = require("../../../../../services/createStyleFile.service");
const checkFolder = require("../../../../../services/folder.service");
const listStyle = require("./list.style");
const randomNames = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
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
    const onlyFields = fields.filter(field=> field !== "id");
	return `import "./styles/${name}.scss";

import React, {Component} from "react";
import {connect} from "react-redux";

// import {get${name.slice(4)}} from "{{{store/API/${name.slice(4).toLowerFirst()}}}}";
import ${Name} from "../_${Name}";

const sampleList = [
    { id: 1, ${onlyFields.map((field) => field + `: "${randomNames[Math.floor(Math.random()*randomNames.length)]}"`).join(", ")}},
    { id: 2, ${onlyFields.map((field) => field + `: "${randomNames[Math.floor(Math.random()*randomNames.length)]}"`).join(", ")}},
]

const ${name} = ({${lowerName} = sampleList, onToggle, setSelection}) => {
    useEffect(() => {
		// get${name.slice(4)}();
    }, []);
    
    return (
        <div className="${name}">
            {${lowerName}.map(${singleName} => (
                <${Name} key={${singleName}.id} ${singleName}={${singleName}} onToggle={onToggle} setSelection={setSelection} />
            ))}
        </div>
    );
};
const mapStateToProps = ({${lowerName}}) => ({${lowerName}});

export default connect(mapStateToProps)(React.memo(${name}));
`;
};

module.exports = async (fileName, name, fields) => {
	checkFolder.components(fileName);

	await createFile(`src/components/${fileName}.js`, content(name, fields));
	console.log("Class Component Created");

	await createStyleFile(fileName, `src/components`, listStyle(name));
};
