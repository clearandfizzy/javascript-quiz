import React from "react";

interface NextButtonProps {
    score: number;
    next: () => void;
    totalQuestions: number;
}

export const NextButton: React.FC<NextButtonProps> = ({score, next, totalQuestions}) => {
    return (
        <div className="mt-4 flex justify-between items-center text-base text-gray-800">
      <span className="font-semibold">
        Score: {score} / {totalQuestions}
      </span>
            <button
                onClick={next}
                className="hover:cursor-pointer px-5 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition"
            >
                Next
            </button>
        </div>
    );
};
