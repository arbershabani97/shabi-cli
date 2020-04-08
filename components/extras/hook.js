const fs = require("fs");

const useStateAndOrEffect = (useState, useEffect) => {
	if (!useState && !useEffect) return "";
	if (useState && !useEffect) return `, {useState}`;
	if (!useState && useEffect) return `, {useEffect}`;
	return `, {useEffect, useState}`;
};

const useStateString = (val) => {
	if (!val) return "";
	return `
    const [value, setValue] = useState("");
`;
};

const useEffectString = (val) => {
	if (!val) return "";
	return `
    useEffect(() => {
            
    }, []);
`;
};

const content = (name, useState, useEffect) => {
	return `import "./styles/${name}.scss";

import React${useStateAndOrEffect(useState, useEffect)} from "react";
  
const ${name} = () => {${useStateString(useState)}${useEffectString(useEffect)}
    return (
        <div className="${name}">
          
        </div>
    );
}
  
export default ${name};`;
};

module.exports = (name, useState, useEffect) =>
	fs.writeFile(`${name}.js`, content(name, useState, useEffect), (err) => {
		if (err) return console.log(err);
		console.log("Hook Created");
		process.exit();
	});
