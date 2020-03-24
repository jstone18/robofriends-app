import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../css/App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Footer from "../components/Footer";
// Redux
import { setSearchField } from "../redux/actions";
import { connect } from "react-redux";

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: []
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(users => this.setState({ robots: users }));
	}

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().indexOf(searchField.toLowerCase()) !== -1;
		});

		return !robots ? (
			<h1>Loading...</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
				<Footer />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value))
	};
};

const mapStateToProps = state => {
	return {
		searchField: state.searchField // state comes from reducer
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
