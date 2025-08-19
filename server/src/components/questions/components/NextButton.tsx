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
			<button role={'button'}
					onClick={() => handleNextButton(lastQuestionIndex)}
					className="focus-ring mt-1 w-full hover:cursor-pointer px-5 py-4 bg-[var(--color-button)] text-white rounded font-semibold shadow  transition"
			>
				Next
			</button>
			<div className="mt-4 flex justify-between items-center text-base text-[var(--color-header)]">
            <span className="font-semibold text-green-600">
                Score: {score} / {lastQuestionIndex + 1}
            </span>

			</div>
		</>

	);
};

export default NextButton;
