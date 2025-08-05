import React from 'react';
import Quiz from "@/components/Quiz";
import {GetServerSideProps} from "next";
import {Question, QuizPropTypes} from "@/types/QuestionType";
import {loadQuestions} from "@/data/config";

export const getServerSideProps: GetServerSideProps = async () => {
    const questions: Question[] = await loadQuestions();
    return {props: {questions}};
};

export default function Home({questions}: QuizPropTypes) {
    return (<Quiz questions={questions}/>)
}
