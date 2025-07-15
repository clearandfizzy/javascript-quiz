import React from "react";

type LearnMoreProps = {
    text: string;
}

export const LearnMore = ({text}: LearnMoreProps) => {
    return (<div className="my-2">
        <a
            href={`https://copilot.microsoft.com/?q=${encodeURIComponent(text)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
        >
            Learn more about this question (opens in a new tab)
        </a>
    </div>);
}