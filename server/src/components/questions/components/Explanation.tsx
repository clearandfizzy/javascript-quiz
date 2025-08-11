import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const Explanation = () => {
	const {currentQuestion} = useQuestions();
	return (<div role={'contentinfo'}
				 className="my-4 bg-gray-100 p-3 rounded text-black focus-ring">
		<span dangerouslySetInnerHTML={{__html: currentQuestion!.explanation}}/>
	</div>);
}

export default Explanation;