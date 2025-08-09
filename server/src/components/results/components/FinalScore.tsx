"use client";
import React from "react";
import {useResults} from "@/components/context/ResultsProvider";
import {useDecryptResults} from "@/components/results/lib/useDecryptResults";

export const FinalScore: React.FC = () => {
    const {results, sharedResults} = useResults();

    useDecryptResults();

    if (sharedResults && sharedResults.length > 0) {
        return <></>
    }

    const displayResults = sharedResults.length > 0 ? sharedResults : results;

    return (
        <div className="test-score mt-4">
            <p>Your Test Score: {displayResults.reduce((total, result) => total + parseInt(result.correct ? "1" : "0"), 0)} / {displayResults.length}</p>
        </div>
    );
}