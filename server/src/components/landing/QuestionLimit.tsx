'use client';

import React from 'react';
import {useQuestionLimit} from "@/components/landing/lib/useQuestionLimit";
import {useQuestions} from "@/components/context/QuestionProvider";

export const QuestionLimit = () => {
	const {questionLimit} = useQuestions();
	const {handleChange} = useQuestionLimit();

	return (
		<div className="flex space-x-4 my-5 items-center justify-center">
			<label
				className={`flex items-center cursor-pointer px-3 py-4 rounded border ${questionLimit === 25 ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300'}`}>
				<input
					type="radio"
					value={25}
					checked={questionLimit === 25}
					onChange={handleChange}
					className="form-radio text-blue-600"
				/>
				<span className="ml-2 text-sm font-medium">Brief Quiz (25 questions)</span>
			</label>
			<label
				className={`flex items-center cursor-pointer px-3 py-4 rounded border ${questionLimit === 50 ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300'}`}>
				<input
					type="radio"
					value={50}
					checked={questionLimit === 50}
					onChange={handleChange}
					className="form-radio text-blue-600"
				/>
				<span className="ml-2 text-sm font-medium">Full Quiz (50 questions)</span>
			</label>
		</div>
	);
};