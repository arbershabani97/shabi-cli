const createFile = require("../../../services/createFile.service");
const createStyleFile = require("../../../services/createStyleFile.service");
const {
    stateString,
    componentDidMountString,
    componentDidUpdateString
} = require("../helpers/class.helpers");
const checkFolder = require("../../../services/folder.service");

const content = (name, state, componentDidMount, componentDidUpdate) => {
    name = name.split("/").pop();
    return `import "./styles/${name}.scss";
    
import React, {Component} from "react";
  
class ${name} extends Component {${stateString(state)}${componentDidMountString(componentDidMount)}${componentDidUpdateString(componentDidUpdate)}
    render(){
        return (
            <div className="${name}">
        
            </div>
        );
    }
}
  
export default ${name};`;
};
module.exports = async (name, state, componentDidMount, componentDidUpdate) => {
    checkFolder.components(name);

    await createFile(`src/components/${name}.js`, content(name, state, componentDidMount, componentDidUpdate));
    console.log("Class Component Created");

    await createStyleFile(name, `src/components`);

    process.exit();
}