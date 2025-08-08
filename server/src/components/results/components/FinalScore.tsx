import React from "react";

type FinalScoreProps = {
    displayResults: { correct: boolean }[];
}

export const FinalScore: React.FC<FinalScoreProps> = ({displayResults}) => {
    return (
        <div className="test-score mt-4">
            <p>Your Test Score: {displayResults.reduce((total, result) => total + parseInt(result.correct ? "1" : "0"), 0)} / {displayResults.length}</p>
        </div>
    );
}