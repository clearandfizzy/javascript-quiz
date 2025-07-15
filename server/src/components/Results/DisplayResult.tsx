import React from "react";
import Link from "next/link";
import {Question} from "@/types/questionType";

type DisplayResultProps = {
    questions: Question[];
    item: {
        questionId: number;
        correct: boolean;
    };
    index: number;
}


export const DisplayResult: React.FC<DisplayResultProps> = ({questions, item, index}) => {
    const q = questions.filter(q => q.id === item.questionId)[0];

    return (
        <li key={index} className="p-4 border rounded flex justify-between items-center">
            <span className="text-sm"><Link
                href={`https://copilot.microsoft.com/?q=${encodeURIComponent(q.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
             {q.text || `Question ${index + 1}`}
        </Link></span>
            <span
                className={item.correct ? "text-sm text-green-600 font-bold" : "text-sm text-red-600 font-bold"}>
                            {item.correct ? "Correct" : "Incorrect"}
                        </span>
        </li>
    );
};

