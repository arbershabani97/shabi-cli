const createFile = require("../../../../../services/createFile.service");
const createStyleFile = require("../../../../../services/createStyleFile.service");
const checkFolder = require("../../../../../services/folder.service");
const showStyle = require("./show.style");

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
	return `import "./styles/${name}.scss";

import React from "react";

const ${name} = ({${fields.join(", ")}}) => {
    return (
        <div className="${name} box">
            ${fieldsString(fields)}
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

	await createStyleFile(fileName, `src/components`, showStyle(name));
};
