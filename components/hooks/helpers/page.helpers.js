const contentApp = (name) => {
	return `import "./App.scss";

import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ${name} from "./pages/${name}.page.js";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route component={${name}} exact path="/${name.toLowerCase()}" />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;`;
};
module.exports = {contentApp};
