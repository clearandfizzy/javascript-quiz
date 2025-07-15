import {questions} from "@/data/questions";
import React from "react";

type DisplayResultProps = {
    item: {
        questionId: number;
        correct: boolean;
    };
    index: number;
}


export const DisplayResult: React.FC<DisplayResultProps> = ({ item, index }) => {
    const q = questions.filter(q => q.id === item.questionId)[0];

    return (
        <li key={index} className="p-4 border rounded flex justify-between items-center">
            <span className="text-sm">{q.text || `Question ${index + 1}`}</span>
            <span
                className={item.correct ? "text-sm text-green-600 font-bold" : "text-sm text-red-600 font-bold"}>
                            {item.correct ? "Correct" : "Incorrect"}
                        </span>
        </li>
    );
};

