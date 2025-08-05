'use client'

import React, {useRef} from "react";
import * as QuizComponents from "@/components/questions/index";
import {Question} from "@/types/QuestionType";
import {useQuestions} from "@/components/context/QuestionProvider";
import {useTimer} from "@/components/questions/lib/useTimer";
import {useInterval} from "@/components/questions/lib/useInterval";
import {useOnSubmit} from "@/components/questions/lib/useOnSubmit";
import {useQuestionIndex} from "@/components/questions/lib/useQuestionIndex";

type QuestionFormProps = {
	questions: Question[];
}

export const QuestionForm = (props: QuestionFormProps) => {
	const {questions} = props;
	const {handleOnSubmit} = useOnSubmit();

	const {
		idx,
		answered,
		timerStarted,
		secondsElapsed,
		currentQuestion,
	} = useQuestions();

	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const lastQuestionIndex = questions.length - 1;

	useQuestionIndex(questions[idx]);
	useTimer();
	useInterval({props: {lastQuestionIndex, idx, intervalRef}});

	if (lastQuestionIndex < 1 || currentQuestion === undefined)
		return <div className="text-center text-gray-500">Loading questions...</div>;

	return (<form onSubmit={e => handleOnSubmit(e)}>
		<fieldset className="border-0 p-0 m-0">
			<legend className="text-xl mb-6 font-semibold text-gray-800">{currentQuestion.text}</legend>
			<div className="space-y-3">
				{currentQuestion.choices.map((answerText, index) => (
					<QuizComponents.Choice
						key={index}
						answerIndex={index}
						answerText={answerText}/>
				))}
			</div>
		</fieldset>
		{answered && (
			<>
				<QuizComponents.NextButton lastQuestionIndex={lastQuestionIndex}/>
				<QuizComponents.Explanation explanation={currentQuestion.explanation}/>
				{timerStarted && secondsElapsed !== null && (
					<QuizComponents.Timer/>
				)}
				<div className="mt-4">
					<QuizComponents.ResultsSoFar/>
				</div>
			</>
		)}
	</form>)
}