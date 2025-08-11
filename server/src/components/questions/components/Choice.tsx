'use client';

import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";
import {useHandleChoice} from "@/components/questions/lib/useHandleChoice";
import {useHandleKeyDown} from "@/components/questions/lib/useKeyDown";

interface ChoiceProps {
	answerIndex: number;
	answerText: string;
}

export const Choice: React.FC<ChoiceProps> = ({answerIndex, answerText}) => {
	const {answered, selected} = useQuestions();
	const {onChoice} = useHandleChoice();
	const {onKeyDown} = useHandleKeyDown();

	return (
		<label key={answerIndex}
			   role={'button'}
			   onKeyDown={(e) => onKeyDown(e)}
			   tabIndex={(answered) ? -1 : answerIndex + 1}
			   className={`block cursor-pointer focus-ring`}>
			<input
				role={"checkbox"}
				tabIndex={-1}
				type="radio"
				name="choice"
				value={answerIndex}
				checked={selected === answerIndex}
				disabled={answered}
				onChange={() => onChoice(answerIndex)}
				className="hidden peer"
			/>
			<span
				className={`inline-block w-full px-4 py-3 rounded-lg border text-base transition
                    peer-checked:bg-green-100 peer-checked:border-green-500
                    peer-disabled:opacity-60
                    bg-white border-gray-300 hover:bg-gray-50`}
			>{answerText}</span>
		</label>
	);
};

export default Choice;
