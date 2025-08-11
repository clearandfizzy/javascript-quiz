'use client'

import React, {useRef, useState} from "react";
import * as QuizComponents from "@/components/questions/components";
import {Question} from "@/types/QuestionType";
import {useQuestions} from "@/components/context/QuestionProvider";
import {useTimer} from "@/components/questions/lib/useTimer";
import {useInterval} from "@/components/questions/lib/useInterval";
import {useOnSubmit} from "@/components/questions/lib/useOnSubmit";
import {useQuestionIndex} from "@/components/questions/lib/useQuestionIndex";
import useResetResults from "@/components/questions/lib/useResetResults";
import useResetQuestions from "@/components/questions/lib/useResetQuestions";
import {useFadeIn} from "@/components/questions/lib/useFadeIn";

type QuestionFormProps = {
	questions: Question[];
}

export const QuestionForm = (props: QuestionFormProps) => {
	const {questions} = props;
	const [fadeIn, setFadeIn] = useState(false);
	const {handleOnSubmit} = useOnSubmit();

	const {
		idx,
		answered,
		currentQuestion,
	} = useQuestions();

	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const lastQuestionIndex = questions.length - 1;

	useFadeIn(setFadeIn)
	useResetQuestions();
	useResetResults();
	useQuestionIndex(questions[idx]);
	useTimer();
	useInterval({props: {lastQuestionIndex, idx, intervalRef}});

	if (lastQuestionIndex < 1 || currentQuestion === undefined)
		return <div className="text-center text-[var(--color-header)]">Loading questions...</div>;

	return (<form role={'form'}
				  onSubmit={e => handleOnSubmit(e)}>
		<fieldset className="border-0 p-0 m-0">
			<legend className="text-xl mb-6 font-semibold">{currentQuestion.text}</legend>
			<div
				className={`space-y-3 ${fadeIn ? 'fade-in' : ''}`}>
				{currentQuestion.choices.map((answerText, index) => (
					<QuizComponents.Choice
						key={index}
						answerIndex={index}
						answerText={answerText}/>
				))}
			</div>
		</fieldset>
		{answered && (
			<div aria-live="polite">
				<QuizComponents.Explanation/>
				<QuizComponents.LearnMore/>
				<QuizComponents.NextButton lastQuestionIndex={lastQuestionIndex}/>
				<QuizComponents.Timer/>
				<QuizComponents.ResultsSoFar/>
			</div>
		)}
	</form>)
}