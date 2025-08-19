import React, {useEffect, useRef} from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const Explanation = () => {
	const {currentQuestion} = useQuestions();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current && currentQuestion) {
			ref.current.scrollIntoView({behavior: 'smooth', block: 'center'});
		}
	}, []);

	return (<div ref={ref}
				 id="explanation"
				 tabIndex={-1}
				 aria-label="Explanation"
				 aria-live="polite"
				 aria-atomic="true"
				 role={'contentinfo'}
				 className="my-4 bg-gray-100 p-3 rounded text-black focus-ring">
		<span dangerouslySetInnerHTML={{__html: currentQuestion!.explanation}}/>
	</div>);
}

export default Explanation;