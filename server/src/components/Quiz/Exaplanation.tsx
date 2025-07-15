import React from "react";

type ExplanationProps = {
    explanation: string;
}

export const Explanation = ({explanation}: ExplanationProps) => {
    return (<div className="my-4 bg-gray-100 p-3 rounded text-gray-700">
        <span dangerouslySetInnerHTML={{__html: explanation}}/>
    </div>);
}