import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const useOnSubmit = () => {
	const {answered, setAnswered} = useQuestions();

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!answered) setAnswered(true);
	}

	return {handleOnSubmit};
}
