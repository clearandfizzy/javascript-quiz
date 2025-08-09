import React from "react";
import Link from "next/link";
import {Result} from "@/types/ResultType";

interface CopilotLinkProps {
	item: Result;
	index: number;
}

export const CopilotLink: React.FC<CopilotLinkProps> = ({item, index}) => (
	<Link
		href={`https://copilot.microsoft.com/?q=${encodeURIComponent(item.question.text)}`}
		target="_blank"
		rel="noopener noreferrer"
		className="text-blue-600 underline hover:text-blue-800"
	>
		{item.question.text || `Question ${index + 1}`}
	</Link>
);