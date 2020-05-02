const createFile = require("../../../../services/createFile.service");
const createStyleFile = require("../../../../services/createStyleFile.service");
const checkFolder = require("../../../../services/folder.service");
const itemStyle = require("./item.style");

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

import React, {useCallback} from "react";

const ${name} = ({${lowerName}, onToggle, setSelection}) => {
	const handleClick = useCallback(
		e => {
			onToggle(e);
			setSelection(${lowerName});
		},
		[${lowerName}],
	);

	const {${onlyFields.join(", ")}} = ${lowerName};
	return (
		<div className="${name} box">
			${fieldsString(onlyFields)}
			<div>
				<button onClick={handleClick} tab="show" type="button">
					Show
				</button>
				<button onClick={handleClick} tab="edit" type="button">
					Edit
				</button>
				<button onClick={handleClick} tab="delete" type="button">
					Delete
				</button>
			</div>
		</div>
	);
};

export default React.memo(${name});
`;
};

module.exports = async (fileName, name, fields) => {
	checkFolder.components(fileName);

	await createFile(`src/components/${fileName}.js`, content(name, fields));
	console.log("Class Component Created");

	await createStyleFile(fileName, `src/components`, itemStyle(name));
};
