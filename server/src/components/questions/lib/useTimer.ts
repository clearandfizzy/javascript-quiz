import {useEffect} from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

type useTimeType = () => void;

export const useTimer: useTimeType = () => {

	const {
		timerStarted,
		secondsElapsed,
		setSecondsElapsed,
	} = useQuestions();

	useEffect(() => {
		if (timerStarted && secondsElapsed === null) {
			setSecondsElapsed(Math.floor(Date.now() / 1000));
		}
	}, [timerStarted, secondsElapsed, setSecondsElapsed]);
}