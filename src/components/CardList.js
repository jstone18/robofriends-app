import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	const cardsArray = robots.map((robot, id) => {
		return (
			<Card key={id} id={robot.id} name={robot.name} email={robot.email} />
		);
	});

	return <div>{cardsArray}</div>;
};

export default CardList;
