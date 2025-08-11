import React from "react";
import {useResults} from "@/components/context/ResultsProvider";

export const ResultsSoFar: React.FC = () => {
	const {results} = useResults();

	return (
		<div role={'table'}>
			<h3 className="font-bold">Results so far:</h3>
			<ul className="list-disc ml-6">
				{results.map((item, index) => (
					<li key={index}>
						Question {index + 1}: {item.correct ? "Correct" : "Incorrect"}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ResultsSoFar;
