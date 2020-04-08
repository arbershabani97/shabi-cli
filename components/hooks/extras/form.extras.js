const fs = require("fs");
String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

const useStateString = (fields) => {
	if (!fields.length) return "";
	const states = fields.map((field) => `const [${field}, set${field.capitalize()}] = useState("");`);

	return `
    ${states.join(`
    `)}
`;
};

const handleChangeString = (fields) => {
	if (!fields.length) return "";
	const states = fields.map((field) => `const handle${field.capitalize()}Change = useCallback(e => set${field.capitalize()}(e.target.value), []);`);

	return `
    ${states.join(`
    `)}
`;
};

const fieldsString = (fields) => {
	if (!fields.length) return "";
	const inputs = fields.map((field) => `<input name="${field}" onChange={handle${field.capitalize()}Change} placeholder="${field}" type="text" value={${field}} />`);
	return `${inputs.join(`
            `)}`;
};

const content = (name, fields) => {
	return `import "./styles/${name}.scss";

import React, {useCallback, useState} from "react";

const ${name} = () => {${useStateString(fields)}${handleChangeString(fields)}

    const handleSubmit = useCallback(e => {
        e.preventDefault();
        
    }, []);

    return (
        <form className="${name}" onSubmit={handleSubmit}>
            ${fieldsString(fields)}
        </form>
    );
}
  
export default ${name};`;
};

module.exports = (name, fields) =>
	fs.writeFile(`${name}.js`, content(name, fields), (err) => {
		if (err) return console.log(err);
		console.log("Component Created");
		process.exit();
	});
