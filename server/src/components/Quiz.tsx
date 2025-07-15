// src/components/Quiz.tsx
import React, {useState, useEffect, useRef} from 'react';
import {useResults} from '@/context/ResultsProvider';
import {useRouter} from 'next/router';
import {Explanation} from "@/components/Quiz/Exaplanation";
import {LearnMore} from "@/components/Quiz/LearnMore";
import {NextButton} from "@/components/Quiz/NextButton";
import {Timer} from "@/components/Quiz/Timer";
import {ResultsSoFar} from "@/components/Quiz/ResultsSoFar";
import {Choice} from "@/components/Quiz/Choice";
import {QuizPropTypes} from "@/types/questionType";

const Quiz: React.FC<QuizPropTypes> = ({questions}) => {
    const [idx, setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selected, setSelected] = useState<number | undefined>(undefined);
    const [timerStarted, setTimerStarted] = useState(false);
    const [secondsElapsed, setSecondsElapsed] = useState<number | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const q = questions[idx];
    const {results, setResults} = useResults();
    const router = useRouter();

    if (questions.length < 1)
        return <div className="text-center text-gray-500">Loading questions...</div>;

    useEffect(() => {
        if (timerStarted && secondsElapsed === null) {
            setSecondsElapsed(Math.floor(Date.now() / 1000));
        }
    }, [timerStarted, secondsElapsed]);

    useEffect(() => {
        if (idx === questions.length - 1 && intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, [idx]);

    const handleFirstAnswer = () => {
        if (!timerStarted) {
            setTimerStarted(true);
            setSecondsElapsed(Math.floor(Date.now() / 1000));
        }
    };

    const choose = (i: number) => {
        if (answered) return;
        setSelected(i);
        setAnswered(true);
        handleFirstAnswer();
        const correct = i === q.correctIndex;
        if (correct) setScore(s => s + 1);
        setResults([...results, {questionId: q.id, correct}]);
    };

    const next = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (idx === questions.length - 1) {
            router.push('/results').then();
            return;
        }
        setAnswered(false);
        setSelected(undefined);
        setIdx(i => i + 1);
    };

    return (
        <div
            className="quiz-container max-w-md mx-auto p-4 sm:mt-8 sm:p-8 sm:border sm:rounded-xl sm:bg-white sm:shadow">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!answered) setAnswered(true);
                }}
            >
                <fieldset className="border-0 p-0 m-0">
                    <legend className="text-xl mb-6 font-semibold text-gray-800">{q.text}</legend>
                    <div className="space-y-3">
                        {q.choices.map((item, index) => (
                            <Choice key={index} index={index} selected={selected} answered={answered} choose={choose}
                                    item={item}/>
                        ))}
                    </div>
                </fieldset>
                {answered && (
                    <>
                        <Explanation explanation={q.explanation}/>
                        <LearnMore text={q.text}/>
                        <NextButton score={score} next={next} totalQuestions={questions.length}/>
                        {timerStarted && secondsElapsed !== null && (
                            <Timer secondsElapsed={secondsElapsed}/>
                        )}
                        <div className="mt-4">
                            <ResultsSoFar results={results}/>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default Quiz;
