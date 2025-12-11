import React, {useCallback} from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const useOnSubmit = () => {
	const {answered, setAnswered} = useQuestions();

	const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!answered) setAnswered(true);
	}, [answered, setAnswered]);

	return {handleOnSubmit};
}
