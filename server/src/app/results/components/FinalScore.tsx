import React from "react";

type FinalScoreProps = {
    displayResults: { correct: boolean }[];
}

export const FinalScore: React.FC<FinalScoreProps> = ({displayResults}) => {
    return (
        <div className="test-score">
            <h2>Your Test Score</h2>
            <p>{displayResults.reduce((total, result) => total + parseInt(result.correct ? "1" : "0"), 0)} / {displayResults.length}</p>
        </div>
    );
}