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

	return (
		<div className="my-4 flex gap-4 item-center justify-center">
			<button role={'button'}
					onClick={() => resetAndStartAgain()}
					className="w-full hover:cursor-pointer px-4 p-4 rounded font-semibold text-white bg-[var(--color-button)] transition-colors hover:bg-[var(--color-button-hover)]"
			>Reset & Start Again
			</button>
		</div>)
}