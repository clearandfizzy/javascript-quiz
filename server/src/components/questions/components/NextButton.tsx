import React from "react";
import {useNextButton} from "@/components/questions/lib/useNextButton";
import {useQuestions} from "@/components/context/QuestionProvider";

interface NextButtonProps {
	lastQuestionIndex: number;
}

export const NextButton: React.FC<NextButtonProps> = ({lastQuestionIndex}) => {
	const {score} = useQuestions();
	const {handleNextButton} = useNextButton();

	return (
		<>
			<button
				onClick={() => handleNextButton(lastQuestionIndex)}
				className="mt-4 w-full hover:cursor-pointer px-5 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition"
			>
				Next
			</button>
			<div className="mt-4 flex justify-between items-center text-base text-[var(--color-header)]">
            <span className="font-semibold">
                Score: {score} / {lastQuestionIndex + 1}
            </span>

			</div>
		</>

	);
};

export default NextButton;
