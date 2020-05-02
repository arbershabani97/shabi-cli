const createFile = require("../../../../../services/createFile.service");
const createStyleFile = require("../../../../../services/createStyleFile.service");
const checkFolder = require("../../../../../services/folder.service");

const stateString = (fields) => {
	if (!fields.length) return "";
	return `
    ${fields.map((field) => `const [${field}, set${field.capitalize()}] = useState("");`).join(`
    `)}
    `;
};
const destructureFieldsString = (fields) => {
	if (!fields.length) return "";
	return `
        const {${fields.join(", ")}} = this.state;
`;
};
const fieldsString = (fields) => {
	if (!fields.length) return "";
	const inputs = fields.map((field) => `<input name="${field}" onChange={handle${field.capitalize()}Change} placeholder="${field}" type="text" value={${field}} />`);
	return `${inputs.join(`
            `)}`;
};

const content = (name, fields) => {
    name = name.split("/").pop();
    const onlyFields = fields.filter(field=> field !== "id");
	return `import "./styles/${name}.scss";

import React, {useCallback, useEffect, useState} from "react";

// import {put${name.slice(4)}} from "{{{store/API/${name.slice(4).toLowerFirst()}s}}}";

const ${name} = ({id, ${onlyFields.map(field=> `${field}: p${field.capitalize()}`).join(", ")}}) => {${stateString(onlyFields)}
    ${onlyFields.map((field) => `useEffect(() => set${field.capitalize()}(p${field.capitalize()}), [p${field.capitalize()}, id]);`).join(`
    `)}
    
    ${onlyFields.map((field) => `const handle${field.capitalize()}Change = useCallback(e => set${field.capitalize()}(e.target.value), []);`).join(`
    `)}

    const handleSubmit = useCallback(
		e => {
			e.preventDefault();
            // put${name.slice(4)}({id, ${onlyFields.join(", ")}});
		},
		[id, ${onlyFields.join(", ")}],
	);

    return (
        <form className="${name}" onSubmit={handleSubmit}>
            ${fieldsString(fields.filter(field=> field !== "id"))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default React.memo(${name});
`;
};

module.exports = async (fileName, name, fields) => {
	checkFolder.components(fileName);

	await createFile(`src/components/${fileName}.js`, content(name, fields));
	console.log("Class Component Created");

	await createStyleFile(fileName, `src/components`);
};
