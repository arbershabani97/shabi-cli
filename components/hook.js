const fs = require("fs");
const content = (name) => {
	return `import "./styles/${name}.scss";

import React from "react";
  
const ${name} = () => {
    return (
        <div className="${name}">
          
        </div>
    );
}
  
export default ${name};`;
};

module.exports = (name) =>
	fs.writeFile(`${name}.js`, content(name), (err) => {
		if (err) return console.log(err);
		console.log("Hook Created");
		process.exit();
	});
