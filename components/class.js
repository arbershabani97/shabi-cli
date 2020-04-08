const content = (name) => {
  return `import "./styles/${name}.scss";
  
import React, {Component} from "react";

class ${name} extends Component {
    render(){
        return (
            <div className="${name}">
        
            </div>
        )
    }
}

export default ${name};`;
};
module.exports = content;
