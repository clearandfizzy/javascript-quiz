import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const Timer: React.FC = () => {
	const {timerStarted, secondsElapsed} = useQuestions();

	if (!timerStarted || secondsElapsed === null)
		return (<></>);

	return (
		<div role={"complementary"}
			className="py-2 text-left">Time elapsed: {String(Math.floor((Math.floor(Date.now() / 1000) - secondsElapsed!) / 60)).padStart(2, '0')}:{String((Math.floor(Date.now() / 1000) - secondsElapsed!) % 60).padStart(2, '0')}
		</div>
	);
};

export default Timer;