import React from "react";
import {useResults} from "@/context/ResultsProvider";
import {questions} from "@/data/local-questions";
import {useRouter} from "next/router";


const ResultsPage: React.FC = () => {
    const {results, resetResults} = useResults();
    const router = useRouter();

    const resetAndStartAgain = () => {
        resetResults();
        router.push('/').then();
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
            <ul className="space-y-4">
                {results.map((r, i) => (
                    <li key={i} className="p-4 border rounded flex justify-between items-center">
                        <span
                            className="text-sm">{questions[r.questionIndex]?.text || `Question ${r.questionIndex + 1}`}</span>
                        <span className={r.correct ? "text-sm text-green-600 font-bold" : "text-sm text-red-600 font-bold"}>
              {r.correct ? "Correct" : "Incorrect"}
            </span>
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex gap-4 item-center justify-center">
                <button onClick={() => resetAndStartAgain()}
                        className="hover:cursor-pointer px-4 py-2 bg-green-400 rounded font-semibold"
                >Reset & Start Again
                </button>
            </div>
        </div>
    );
};

export default ResultsPage;

