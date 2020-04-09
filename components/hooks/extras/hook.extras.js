const fs = require("fs");
const {useStateAndOrEffect, useStateString, useEffectString} = require("../helpers/hook.helpers");

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
