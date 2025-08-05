'use server';

import React from "react";
import {getByKey} from "@/datasource/questions/QuestionRepository";
import Results from "@/components/results/Results";

type ResultsPageProps = {
	params: { key?: string }
};

const ResultsPage = async ({params}: ResultsPageProps) => {
	const key = params?.key || 'javascript';
	const questions = await getByKey(key);

	return (<>
		<div
			className="quiz-container max-w-md mx-auto p-4 sm:mt-8 sm:p-8 sm:border sm:rounded-xl sm:bg-white sm:shadow">
			<Results questions={questions}/>
		</div>
	</>);
}

export default ResultsPage;