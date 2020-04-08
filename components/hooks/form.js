const fs = require("fs");

const content = (name) => {
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

module.exports = (name) =>
	fs.writeFile(`${name}.js`, content(name), (err) => {
		if (err) return console.log(err);
		console.log("Component Created");
		process.exit();
	});
