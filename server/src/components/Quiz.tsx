// src/components/Quiz.tsx
import React, {useState} from 'react';
import {questions} from '../data/local-questions.ts';

const Quiz: React.FC = () => {
    const [idx, setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selected, setSelected] = useState<number | undefined>(undefined);
    const q = questions[idx];

    const choose = (i: number) => {
        if (answered) return;
        setSelected(i);
        setAnswered(true);
        if (i === q.correctIndex) setScore(s => s + 1);
    };

    const next = () => {
        setAnswered(false);
        setSelected(undefined);
        setIdx(i => (i + 1) % questions.length);
    };

    return (
        <div className="quiz-container max-w-md mx-auto mt-8 p-8 border rounded-xl bg-white shadow">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!answered) setAnswered(true);
                }}
            >
                <fieldset className="border-0 p-0 m-0">
                    <legend className="text-xl mb-6 font-semibold text-gray-800">{q.text}</legend>
                    <div className="space-y-3">
                        {q.choices.map((c, i) => (
                            <label key={i} className="block cursor-pointer">
                                <input
                                    type="radio"
                                    name="choice"
                                    value={i}
                                    checked={selected === i}
                                    disabled={answered}
                                    onChange={() => choose(i)}
                                    className="hidden peer"
                                />
                                <span
                                    className={`inline-block w-full px-4 py-3 rounded-lg border text-base transition
                                        peer-checked:bg-green-100 peer-checked:border-green-500
                                        peer-disabled:opacity-60
                                        bg-white border-gray-300 hover:bg-gray-50
                                    `}
                                >{c}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                {answered && (
                    <>
                        <div className="my-4 bg-gray-100 p-3 rounded text-gray-700">
                            <span dangerouslySetInnerHTML={{__html: q.explanation}}/>
                        </div>
                        <div className="mt-4 flex justify-between items-center text-base text-gray-800">
                            <span className="font-semibold">Score: {score} / {questions.length}</span>
                            <button onClick={next} className="px-5 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition">
                                Next
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default Quiz;
