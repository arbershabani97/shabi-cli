const fs = require("fs");

const stateString = (val) => {
	if (!val) return "";
	return `
    state={

    };
`;
};
const componentDidMountString = (val) => {
	if (!val) return "";
	return `
    componentDidMount() {

    }
`;
};
const componentDidUpdateString = (val) => {
	if (!val) return "";
	return `
    componentDidUpdate(prevProps, prevState) {
        if (this.props.userID !== prevProps.userID) {
            // Action
        }
    }
`;
};

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
