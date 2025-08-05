import React from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

export const Timer: React.FC = ( ) => {
    const {secondsElapsed} = useQuestions();
    return (
        <div className="my-4 p-4 text-left bg-green-200">
            Time elapsed: {String(Math.floor((Math.floor(Date.now() / 1000) - secondsElapsed!) / 60)).padStart(2, '0')}:{String((Math.floor(Date.now() / 1000) - secondsElapsed!) % 60).padStart(2, '0')}
        </div>
    );
};

export default Timer;