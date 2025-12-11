'use client';

import React, {createContext, useContext, useMemo} from "react";

type SearchContextType = {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchProvider = () => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useSearchProvider must be used within a SearchProvider");
	}
	return context;
}

export const SearchProvider = ({children}: { children: React.ReactNode }) => {
	const [searchTerm, setSearchTerm] = React.useState<string>("");

	const value = useMemo(() => ({
		searchTerm, 
		setSearchTerm
	}), [searchTerm]);

	return (
		<SearchContext.Provider value={value}>
			{children}
		</SearchContext.Provider>
	);
}