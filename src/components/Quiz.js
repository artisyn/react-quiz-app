import React, { useState, useContext } from 'react';
import { Questions } from '../helpers/QuestionBank.js';
import '../components/Quiz.scss';
import { QuizContext } from '../helpers/Contexts.js';

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [optionChosen, setOptionChosen] = useState('');
	const [selectedRadio, setSelectedRadio] = useState('');

	const { score, setScore, setGameState } = useContext(QuizContext);

	const nextQuestion = () => {
		console.log(score);
		if (Questions[currentQuestion].answer === optionChosen) {
			console.log('correct');
			setScore(score + 1);
		}

		setCurrentQuestion(currentQuestion + 1);
	};

	const finishQuiz = () => {
		if (Questions[currentQuestion].answer === optionChosen) {
			console.log('correct');
			setScore(score + 1);
		}
		setGameState('endscreen');
	};

	return (
		<div className="quiz">
			<h1> {Questions[currentQuestion].prompt}</h1>

			<div className="question">
				<input
					onClick={() => {
						setOptionChosen('optionA');
					}}
					onChange={() => {
						setSelectedRadio('optionA');
					}}
					type="radio"
					name="x"
					id="a"
					value="optionA"
					checked={selectedRadio === 'optionA'}
				/>
				<label htmlFor="a">{Questions[currentQuestion].optionA}</label>
			</div>

			<div className="question">
				<input
					onClick={() => {
						setOptionChosen('optionB');
					}}
					onChange={() => {
						setSelectedRadio('optionB');
					}}
					type="radio"
					name="x"
					id="b"
					value="optionB"
					checked={selectedRadio === 'optionB'}
				/>
				<label htmlFor="b">{Questions[currentQuestion].optionB}</label>
			</div>

			<div className="question">
				<input
					onClick={() => {
						setOptionChosen('optionC');
					}}
					onChange={() => {
						setSelectedRadio('optionC');
					}}
					type="radio"
					name="x"
					id="c"
					value="optionC"
					checked={selectedRadio === 'optionC'}
				/>

				<label htmlFor="c">{Questions[currentQuestion].optionC}</label>
			</div>

			<div className="question">
				<input
					onClick={() => {
						setOptionChosen('optionD');
					}}
					onChange={() => {
						setSelectedRadio('optionD');
					}}
					type="radio"
					name="x"
					id="d"
					value="optionD"
					checked={selectedRadio === 'optionD'}
				/>
				<label htmlFor="d">{Questions[currentQuestion].optionD}</label>
			</div>
			{currentQuestion === Questions.length - 1 ? (
				<button onClick={finishQuiz} className="next">
					Finish
				</button>
			) : (
				<button
					className="next"
					onClick={() => {
						// setCurrentQuestion(currentQuestion + 1);
						// console.log(optionChosen);
						setSelectedRadio('');
						nextQuestion();
					}}
				>
					Next
				</button>
			)}
		</div>
	);
}

export default Quiz;
