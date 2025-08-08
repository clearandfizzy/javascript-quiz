'use client';

import React from "react";
import {QuizPropTypes} from "@/types/QuestionType";
import {useResults} from "@/components/context/ResultsProvider";
import {DisplayResult} from "@/components/results/components/DisplayResult";
import {SharableLink} from "@/components/results/components/SharableLink";
import {FinalScore} from "@/components/results/components/FinalScore";
import {useDecryptResults} from "@/components/results/lib/useDecryptResults";
import {useEncryptResults} from "@/components/results/lib/useEncryptResults";
import {RestartAndStartAgain} from "@/components/results/components/RestartAndStartAgain";

const ResultsList: React.FC<QuizPropTypes> = ({questions}) => {
	const {results, sharedResults} = useResults();

	useDecryptResults();
	useEncryptResults();

	const displayResults = sharedResults.length > 0 ? sharedResults : results;

	return (
		<div className="max-w-xl mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
			<SharableLink/>
			<ul className="space-y-4">
				{displayResults.map((item, index) => (
					<DisplayResult
						key={index}
						question={questions.filter(q => q.id === item.questionId)[0]}
						item={item}
						index={index}/>
				))}
			</ul>
			<FinalScore displayResults={displayResults}/>
			<RestartAndStartAgain/>
			<SharableLink/>
		</div>
	);
};

export default ResultsList;
