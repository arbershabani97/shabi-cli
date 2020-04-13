const createFile = require("../../services/createFile.service");
const createStyleFile = require("../../services/createStyleFile.service");
const checkFolder = require("../../services/folder.service");

const content = (name) => {
    name = name.split("/").pop();
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

module.exports = async (name) => {
    checkFolder.components(name);

    await createFile(`src/components/${name}.js`, content(name));
    console.log("Class Component Created");

    await createStyleFile(name, `src/components`);
}