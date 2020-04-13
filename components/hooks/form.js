const createFile = require("../../services/createFile.service");
const createStyleFile = require("../../services/createStyleFile.service");
const checkFolder = require("../../services/folder.service");

const content = (name) => {
    name = name.split("/").pop();
    return `import "./styles/${name}.scss";

import React, {useCallback} from "react";

const ${name} = () => {

    const handleSubmit = useCallback(e => {
        e.preventDefault();
        
    }, []);

    return (
        <form className="${name}" onSubmit={handleSubmit}>
          
        </form>
    );
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