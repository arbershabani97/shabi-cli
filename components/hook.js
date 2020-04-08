const content = (name) => {
  return `import "./styles/${name}.scss";
  
import React from "react";
  
const ${name} = () => {
    return (
        <div className="${name}">
          
        </div>
    )
}
  
export default ${name};`;
};
module.exports = content;
