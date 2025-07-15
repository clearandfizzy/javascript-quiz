import React, { createContext, useContext, useState, ReactNode } from "react";

interface Result {
  questionId: number;
  correct: boolean;
}

interface ResultsContextType {
  results: Result[];
  setResults: (results: Result[]) => void;
  resetResults: () => void;
}

const ResultsContext = createContext<ResultsContextType | undefined>(undefined);

export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<Result[]>([]);

  const resetResults = () => setResults([]);

  return (
    <ResultsContext.Provider value={{ results, setResults, resetResults }}>
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
