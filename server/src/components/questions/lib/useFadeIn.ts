import {useEffect} from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const useFadeIn = (setFadeIn: (fade: boolean) => void) => {
	const {currentQuestion} = useQuestions();

	useEffect(() => {
		setFadeIn(true);

		const timeout = setTimeout(() => {
			setFadeIn(false)
		}, 500);

		return () => clearTimeout(timeout);
	}, [currentQuestion]);

}