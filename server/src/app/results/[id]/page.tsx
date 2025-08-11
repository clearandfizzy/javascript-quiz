'use server';

import React from "react";
import ResultsList from "@/components/results/ResultsList";

const ResultsPage = async () => {

	return (<>
		<div className="quiz-container max-w-md mx-auto p-4 sm:mt-8 sm:p-8 sm:border sm:rounded-xl sm:bg-white sm:shadow">
			<ResultsList/>
		</div>
	</>);
}

export default ResultsPage;