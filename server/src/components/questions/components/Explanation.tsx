import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const Explanation = () => {
	const {currentQuestion} = useQuestions();
	return (<div className="my-4 bg-gray-100 p-3 rounded text-[var(--color-header)]">
		<span dangerouslySetInnerHTML={{__html: currentQuestion!.explanation}}/>
	</div>);
}

export default Explanation;