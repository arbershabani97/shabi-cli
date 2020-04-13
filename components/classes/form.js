const createFile = require("../../services/createFile.service");
const createStyleFile = require("../../services/createStyleFile.service");
const checkFolder = require("../../services/folder.service");

const content = (name) => {
    name = name.split("/").pop();
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

module.exports = async (name) => {
    checkFolder.components(name);

    await createFile(`src/components/${name}.js`, content(name));
    console.log("Form Component Created");

    await createStyleFile(name, `src/components`);

    process.exit();
}