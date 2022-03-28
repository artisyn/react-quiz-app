import React, { useContext } from 'react';
import { QuizContext } from '../helpers/Contexts.js';
import '../components/EndScreen.scss';
import { Questions } from '../helpers/QuestionBank.js';

function EndScreen() {
	const { score, setScore, setGameState } = useContext(QuizContext);
	return (
		<div className="endscreen">
			<h1>
				Your Score {score} / {Questions.length}
			</h1>

			<button
				onClick={() => {
					setScore(0);
					setGameState('menu');
				}}
			>
				Play Again
			</button>
		</div>
	);
}

export default EndScreen;
