import React from "react";
import Link from "next/link";
import {useQuestions} from "@/components/context/QuestionProvider";
import {ClickIcon} from "@/components/questions/components/icons/Click";

export const LearnMore = () => {
	const {currentQuestion, questionKey} = useQuestions();

	return (<div className="my-2">
		<Link
			role={'link'}
			href={`https://copilot.microsoft.com/?q=${encodeURIComponent(questionKey + ': ' + currentQuestion!.text)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-600 underline py-4 focus-ring-active flex items-center"
		>
			<ClickIcon />Learn more about this question

		</Link>
	</div>);
}

export default LearnMore;