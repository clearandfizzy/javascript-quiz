import React from 'react';

interface Result {
  questionIndex: number;
  correct: boolean;
}

interface ResultsListProps {
  results: Result[];
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => (
  <div className="mt-4">
    <h3 className="font-bold">Results so far:</h3>
    <ul className="list-disc ml-6">
      {results.map((r, i) => (
        <li key={i}>
          Question {r.questionIndex + 1}: {r.correct ? "Correct" : "Incorrect"}
        </li>
      ))}
    </ul>
  </div>
);

export default ResultsList;
