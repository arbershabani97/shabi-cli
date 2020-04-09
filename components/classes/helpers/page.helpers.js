const contentApp = (name) => {
	return `import "./App.scss";

import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ${name} from "./pages/${name}.page.js";

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route component={${name}} exact path="/${name.toLowerCase()}" />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;`;
};
module.exports = {contentApp};
