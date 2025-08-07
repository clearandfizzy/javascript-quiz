'use server';

import React from "react";
import {getByKey} from "@/datasource/questions/QuestionRepository";
import ResultsList from "@/components/results/ResultsList";

type ResultsPageProps = {
	params: { key?: string }
};

const ResultsPage = async ({params}: ResultsPageProps) => {
	const key = params?.key || 'javascript';
	const questions = await getByKey(key);

	return (<>
		<div
			className="quiz-container max-w-md mx-auto p-4 sm:mt-8 sm:p-8 sm:border sm:rounded-xl sm:bg-white sm:shadow">
			<ResultsList questions={questions}/>
		</div>
	</>);
}

export default ResultsPage;