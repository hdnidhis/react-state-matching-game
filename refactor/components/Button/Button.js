import React from "react";
import GameContext from "../../GameContext";
import "./Button.css";

const Button = ({ playing, startGame }) => {
	return (
		<GameContext.Consumer>
			<button onClick={startGame}>
				{playing === true ? "reset" : "start"}
			</button>
		</GameContext.Consumer>
	);
};

export default Button;
