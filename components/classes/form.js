const fs = require("fs");

const content = (name) => {
	return `import "./styles/${name}.scss";

import React, {Component} from "react";

class ${name} extends Component {

    handleSubmit = e => {
        e.preventDefault();
        
    }

    render(){
        return (
            <form className="${name}" onSubmit={this.handleSubmit}>
        
            </form>
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
