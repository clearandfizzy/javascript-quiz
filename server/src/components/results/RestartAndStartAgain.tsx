'use client';

import React from "react";
import {useResults} from "@/components/context/ResultsProvider";
import {useRouter} from "next/navigation";

export const RestartAndStartAgain = () => {
	const router = useRouter();
	const {resetResults} = useResults();

	const resetAndStartAgain = () => {
		resetResults();
		router.push('/');
	}

	return (<button onClick={() => resetAndStartAgain()}
					className="hover:cursor-pointer px-4 py-2 bg-green-400 rounded font-semibold"
	>Reset & Start Again
	</button>)
}