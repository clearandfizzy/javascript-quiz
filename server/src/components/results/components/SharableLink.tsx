'use client';

import React, {useState} from "react";
import {useResults} from "@/components/context/ResultsProvider";
import {useEncryptResults} from "@/components/results/lib/useEncryptResults";

export const SharableLink: React.FC = () => {
	const {shareUrl} = useResults();
	const [copied, setCopied] = useState(false);

	useEncryptResults();

	if (!shareUrl) return (<></>);

	const handleOnClick = () => {
		console.log('Input focused');
		navigator.clipboard.writeText(shareUrl)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch(err => console.error('Failed to copy text:', err));
	};

	return (<div className="mb-6 relative">
		<input type="hidden"
			   value={shareUrl}
			   readOnly
			   className="w-full mt-2 p-2 border rounded bg-gray-100 text-xs"
		/>
		<button onClick={() => handleOnClick()}
				className="shadow-2 hover:cursor-pointer rounded bg-[var(--color-accent-amber)] text-white bold p-4 w-full transition-colors hover:bg-[var(--color-accent-amber-hover)] "
		>Share Quiz
		</button>
		{copied && (
			<div className="absolute top-0 right-0 mt-2 mr-2 bg-black text-white text-sm px-4 py-2 rounded shadow">
				Copied!
			</div>
		)}
	</div>)
}