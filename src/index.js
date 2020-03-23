import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./redux/reducers";
import "./css/index.css";
import "tachyons";
import App from "./containers/App";

const store = createStore(searchRobots);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
