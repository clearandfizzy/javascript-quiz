"use client";

import React from "react";
import {useResults} from "@/components/context/ResultsProvider";
import {useDecryptResults} from "@/components/results/lib/useDecryptResults";
import {CopilotLink} from "@/components/results/components/displayresults/CopilotLink";

export const DisplayResult: React.FC = () => {
	const {results, sharedResults} = useResults();

	useDecryptResults();

	if (sharedResults.length < 1 && results.length < 1) {
		return <></>
	}

	const displayResults = sharedResults.length > 0 ? sharedResults : results;

	return (
		<ul role={'table'}
			className="space-y-4">
			{displayResults.map((item, index) => (
				<li key={index} className="p-4 border rounded flex justify-between items-center">
					<span className="text-sm"><CopilotLink item={item} index={index}/></span>
					{item.correct
						? <span className="text-sm text-green-600 font-bold">Correct</span>
						: <span className="text-sm text-red-600 font-bold">Incorrect</span>
					}
				</li>
			))}
		</ul>
	);
};

