import {useEffect} from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const useResetQuestions = () => {
	const {resetQuestions} = useQuestions();

	useEffect(() => {
		resetQuestions();
	}, []);
}

export default useResetQuestions;