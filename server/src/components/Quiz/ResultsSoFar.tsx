import React from "react";

interface ResultsSoFarProps {
    results: {
        correct: boolean;
    }[];
}

export const ResultsSoFar: React.FC<ResultsSoFarProps> = ({ results }) => {
    return (
        <>
            <h3 className="font-bold">Results so far:</h3>
            <ul className="list-disc ml-6">
                {results.map((item, index) => (
                    <li key={index}>
                        Question {index + 1}: {item.correct ? "Correct" : "Incorrect"}
                    </li>
                ))}
            </ul>
        </>
    );
};
