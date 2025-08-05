'use client';

import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";
import {useHandleChoice} from "@/components/questions/lib/useHandleChoice";

interface ChoiceProps {
	answerIndex: number;
	answerText: string;
}

export const Choice: React.FC<ChoiceProps> = ({answerIndex, answerText}) => {
	const {answered, selected} = useQuestions();
	const {handleChoice} = useHandleChoice();

	return (
		<label key={answerIndex} className="block cursor-pointer">
			<input
				type="radio"
				name="choice"
				value={answerIndex}
				checked={selected === answerIndex}
				disabled={answered}
				onChange={() => handleChoice(answerIndex)}
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
