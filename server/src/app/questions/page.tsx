'use server';

import React from "react";
import {QuestionForm} from "@/components/questions/QuestionForm";
import {getByKey} from "@/datasource/questions/QuestionRepository";

type QuestionsPageProps = {
	params: { key?: string }
};

const QuestionsPage = async ({ params }: QuestionsPageProps) => {
	const key = params?.key || 'javascript';
	const questions = await getByKey(key);

	return (<>
		<div
			className="quiz-container max-w-md mx-auto p-4 sm:mt-8 sm:p-8 sm:border sm:rounded-xl sm:bg-white sm:shadow">
			<QuestionForm questions={questions}/>
		</div>
	</>);
}

export default QuestionsPage;