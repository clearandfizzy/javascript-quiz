import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const useQuestionLimit = () => {
	const {setQuestionLimit} = useQuestions();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuestionLimit(parseInt(event.target.value, 10));
	};

	return {handleChange};

}