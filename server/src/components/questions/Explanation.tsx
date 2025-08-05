import React from "react";

type ExplanationProps = {
	explanation: string;
}

type ExplanationType = React.FC<ExplanationProps>;

export const Explanation: ExplanationType = ({explanation}) => {
	return (<div className="my-4 bg-gray-100 p-3 rounded text-gray-700">
		<span dangerouslySetInnerHTML={{__html: explanation}}/>
	</div>);
}

export default Explanation;