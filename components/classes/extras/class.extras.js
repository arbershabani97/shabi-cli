const fs = require("fs");
const {stateString, componentDidMountString, componentDidUpdateString} = require("../helpers/class.helpers");

const content = (name, state, componentDidMount, componentDidUpdate) => {
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
module.exports = (name, state, componentDidMount, componentDidUpdate) =>
	fs.writeFile(`${name}.js`, content(name, state, componentDidMount, componentDidUpdate), (err) => {
		if (err) return console.log(err);
		console.log("Component Created");
		process.exit();
	});
