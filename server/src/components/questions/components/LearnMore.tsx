import React from "react";
import Link from "next/link";
import {useQuestions} from "@/components/context/QuestionProvider";

export const LearnMore = () => {
	const context = process.env.NEXT_PUBLIC_QUESTIONS || 'javascript';
	const {currentQuestion} = useQuestions();

	return (<div className="my-2">
		<Link
			href={`https://copilot.microsoft.com/?q=${encodeURIComponent(context + ': ' + currentQuestion!.text)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-600 underline hover:text-blue-800"
		>
			Learn more about this question (opens in a new tab)
		</Link>
	</div>);
}

export default LearnMore;