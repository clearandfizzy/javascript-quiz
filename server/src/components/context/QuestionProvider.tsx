'use client';

import React, {createContext, ReactNode, useContext, useState} from "react";
import {Question} from "@/types/QuestionType";

export interface QuestionContextType {
	questionKey: string;
	setQuestionKey: (key: string) => void;
	currentQuestion: Question | undefined;
	idx: number;
	score: number;
	answered: boolean;
	selected: number | undefined;
	timerStarted: boolean;
	secondsElapsed: number | null;
	setIdx: (idx: number) => void;
	setScore: (score: number) => void;
	setAnswered: (answered: boolean) => void;
	setSelected: (selected: number | undefined) => void;
	setTimerStarted: (started: boolean) => void;
	setSecondsElapsed: (seconds: number | null) => void;
	setCurrentQuestion: (question: Question | undefined) => void;
	resetQuestions: () => void;
	questionLimit: number;
	setQuestionLimit: (limit: number) => void;
}

const QuestionsContext = createContext<QuestionContextType | undefined>(undefined);

export const QuestionsProvider = ({children}: { children: ReactNode }) => {
	const [questionKey, setQuestionKey] = useState<string>('');
	const [currentQuestion, setCurrentQuestion] = useState<QuestionContextType['currentQuestion']>(undefined);
	const [idx, setIdx] = useState(0);
	const [score, setScore] = useState(0);
	const [answered, setAnswered] = useState(false);
	const [selected, setSelected] = useState<number | undefined>(undefined);
	const [timerStarted, setTimerStarted] = useState(false);
	const [secondsElapsed, setSecondsElapsed] = useState<number | null>(null);
	const [questionLimit, setQuestionLimit] = useState(25); // Default to 25 questions

	const resetQuestions = () => {
		setCurrentQuestion(undefined);
		setIdx(0);
		setScore(0);
		setAnswered(false);
		setSelected(undefined);
		setTimerStarted(false);
		setSecondsElapsed(null);
	}

	return (
		<QuestionsContext.Provider value={{
			questionKey, setQuestionKey,
			currentQuestion, setCurrentQuestion,
			idx, setIdx,
			score, setScore,
			answered, setAnswered,
			selected, setSelected,
			timerStarted, setTimerStarted,
			secondsElapsed, setSecondsElapsed,
			resetQuestions,
			questionLimit, setQuestionLimit
		}}>
			{children}
		</QuestionsContext.Provider>
	);
};

export const useQuestions = () => {
	const context = useContext(QuestionsContext);
	if (!context) {
		throw new Error("useQuestions must be used within a QuestionsProvider");
	}
	return context;
};
