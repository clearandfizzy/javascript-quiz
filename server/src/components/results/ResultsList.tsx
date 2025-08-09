'use server';

import React from "react";
import {DisplayResult} from "@/components/results/components/DisplayResult";
import {SharableLink} from "@/components/results/components/SharableLink";
import {FinalScore} from "@/components/results/components/FinalScore";
import {RestartAndStartAgain} from "@/components/results/components/RestartAndStartAgain";

const ResultsList: React.FC = () => {
	return (
		<div className="max-w-xl mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
			<SharableLink/>
			<DisplayResult/>
			<FinalScore/>
			<RestartAndStartAgain/>
			<SharableLink/>
		</div>
	);
};

export default ResultsList;
