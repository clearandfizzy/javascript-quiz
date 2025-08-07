'use client';

import React, {createContext, useContext, useState, ReactNode} from "react";
import {Result} from "@/types/ResultType";

interface ResultsContextType {
	results: Result[];
	setResults: (results: Result[]) => void;
	resetResults: () => void;
	setSharedResults: (results: Result[]) => void;
	sharedResults: Result[];
	shareUrl: string;
	setShareUrl: (url: string) => void;
}

const ResultsContext = createContext<ResultsContextType | undefined>(undefined);

export const ResultsProvider = ({children}: { children: ReactNode }) => {
	const [results, setResults] = useState<Result[]>([]);
	const [sharedResults, setSharedResults] = useState<Result[]>([]);
	const [shareUrl, setShareUrl] = useState<string>("");

	const resetResults = () => setResults([]);

	return (
		<ResultsContext.Provider value={{
			results, setResults,
			resetResults,
			sharedResults, setSharedResults,
			shareUrl, setShareUrl
		}}>
			{children}
		</ResultsContext.Provider>
	);
};

export const useResults = () => {
	const context = useContext(ResultsContext);
	if (!context) {
		throw new Error("useResults must be used within a ResultsProvider");
	}
	return context;
};
