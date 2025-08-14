'use client';

import React, {createContext, useContext} from "react";

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

	return (
		<SearchContext.Provider value={{searchTerm, setSearchTerm}}>
			{children}
		</SearchContext.Provider>
	);
}