import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../css/App.css";
import Scroll from "../components/Scroll";

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchfield: ""
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().indexOf(searchfield.toLowerCase()) !== -1;
		});

		return !robots ? (
			<h1>Loading...</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
