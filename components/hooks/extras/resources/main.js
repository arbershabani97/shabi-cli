const createFile = require("../../../../services/createFile.service");
const createStyleFile = require("../../../../services/createStyleFile.service");
const checkFolder = require("../../../../services/folder.service");
const mainStyle = require("./main.style");

const content = (name, fields) => {
	name = name.split("/").pop();
    const singleName = name.slice(0,-1);
	return `import "./styles/${name}.scss";

import React, {useCallback, useMemo, useState} from "react";
import {TabContent, TabPane} from "reactstrap";

import Create${singleName} from "./resources/Create${singleName}";
import Delete${singleName} from "./resources/Delete${singleName}";
import Edit${singleName} from "./resources/Edit${singleName}";
import List${singleName}s from "./resources/List${singleName}s";
import Show${singleName} from "./resources/Show${singleName}";

const ${name} = () => {
	const [activeTab, setActiveTab] = useState("home");
	const [selected${singleName}, setSelected${singleName}] = useState({${fields.map((field) => field + `: ""`).join(`, `)}});

	const setSelection = useCallback(selected${singleName} => setSelected${singleName}(selected${singleName}), []);

	const handleToggle = useCallback(e => setActiveTab(e.currentTarget.getAttribute("tab") || "home"), []);

	const isHomeActive = useMemo(() => (activeTab === "home" ? "active" : ""), [activeTab]);
	const isCreateActive = useMemo(() => (activeTab === "create" ? "active" : ""), [activeTab]);   

	return (
		<div className="${name}">
			<div className="header">
				<button className={isHomeActive} onClick={handleToggle} tab="home" type="button">
					Home
				</button>
				<button className={isCreateActive} onClick={handleToggle} tab="create" type="button">
					Create
				</button>
			</div>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="home">
					<h3>Home Tab</h3>
					<List${singleName}s onToggle={handleToggle} setSelection={setSelection} />
				</TabPane>
				<TabPane tabId="show">
					<h3>Show Tab</h3>
					<Show${singleName} {...selected${singleName}} />
				</TabPane>
				<TabPane tabId="create">
					<h3>Create Tab</h3>
					<Create${singleName} />
				</TabPane>
				<TabPane tabId="edit">
					<h3>Edit Tab</h3>
					<Edit${singleName} {...selected${singleName}} />
				</TabPane>
				<TabPane tabId="delete">
					<h3>Delete Tab</h3>
					<Delete${singleName} {...selected${singleName}} />
				</TabPane>
			</TabContent>
		</div>
	);
};

export default React.memo(${name});
`;
};

module.exports = async (fileName, name, fields) => {
	checkFolder.components(fileName);

	await createFile(`src/components/${fileName}.js`, content(name, fields));
	console.log("Class Component Created");

	await createStyleFile(fileName, `src/components`, mainStyle(name));
};
