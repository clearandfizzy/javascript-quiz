import {useEffect} from "react";
import {useQuestions} from "@/components/context/QuestionProvider";
import {Question} from "@/types/QuestionType";

type UseQuestionIndex = (question: Question) => void;

export const useQuestionIndex: UseQuestionIndex = (question: Question) => {
	const {setCurrentQuestion} = useQuestions();

	useEffect(() => {
		setCurrentQuestion(question);
	}, [question])

}