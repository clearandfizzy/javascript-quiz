import React from "react";
import Link from "next/link";

type LearnMoreProps = {
    text: string;
}

export const LearnMore = ({text}: LearnMoreProps) => {
    const context = process.env.NEXT_PUBLIC_QUESTIONS || 'javascript';
    return (<div className="my-2">
        <Link
            href={`https://copilot.microsoft.com/?q=${encodeURIComponent(context + ': ' + text)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
        >
            Learn more about this question (opens in a new tab)
        </Link>
    </div>);
}