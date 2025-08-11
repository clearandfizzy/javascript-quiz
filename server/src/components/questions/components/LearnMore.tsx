import React from "react";
import Link from "next/link";
import {useQuestions} from "@/components/context/QuestionProvider";

export const LearnMore = () => {
	const {currentQuestion, questionKey} = useQuestions();

	return (<div className="my-2">
		<Link
			role={'link'}
			href={`https://copilot.microsoft.com/?q=${encodeURIComponent(questionKey + ': ' + currentQuestion!.text)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-600 underline hover:text-blue-800 py-4 focus-ring"
		>
			Learn more about this question (opens in a new tab)
		</Link>
	</div>);
}

export default LearnMore;