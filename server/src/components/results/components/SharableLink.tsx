'use client';

import React, {useState} from "react";
import {useResults} from "@/components/context/ResultsProvider";
import {useEncryptResults} from "@/components/results/lib/useEncryptResults";

export const SharableLink: React.FC = () => {
	const {shareUrl} = useResults();
	const [copied, setCopied] = useState(false);

	useEncryptResults();

	if (!shareUrl) return (<></>);

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		e.target.select();
		navigator.clipboard.writeText(e.target.value)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch(err => console.error('Failed to copy text:', err));
	};

	return (<div className="mb-6 relative">
		<span className="font-semibold">Shareable Link:</span>
		<input type="text"
			   value={shareUrl}
			   readOnly
			   className="w-full mt-2 p-2 border rounded bg-gray-100 text-xs"
			   onFocus={handleFocus}
		/>
		{copied && (
			<div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white text-sm px-4 py-2 rounded shadow">
				Copied!
			</div>
		)}
	</div>)
}