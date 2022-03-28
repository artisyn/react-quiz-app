import React, { useContext } from 'react';
import '../components/MainMenu.scss';
import { QuizContext } from '../helpers/Contexts.js';

function MainMenu() {
	const { gameState, setGameState } = useContext(QuizContext);
	return (
		<div className="menu">
			<button
				onClick={() => {
					setGameState('quiz');
				}}
			>
				Start Quizz
			</button>
		</div>
	);
}

export default MainMenu;
