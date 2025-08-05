import React from 'react';
import {GetServerSideProps} from "next";
import {Question, QuizPropTypes} from "@/types/QuestionType";
import {loadQuestions} from "@/data/config";
import Results from "@/components/Results";

export const getServerSideProps: GetServerSideProps = async () => {
    const questions: Question[] = await loadQuestions();
    return {props: {questions}};
};

export default function Home({questions}: QuizPropTypes) {
    return (<Results questions={questions}/>)
}
