const fs = require("fs");

const content = (name) => {
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

class ${name} extends Component {
    render(){
        return (
            <div className="${name}">
        
            </div>
        );
    }
}

export default ${name};`;
};

module.exports = (name) =>
	fs.writeFile(`${name}.js`, content(name), (err) => {
		if (err) return console.log(err);
		console.log("Component Created");
		process.exit();
	});
