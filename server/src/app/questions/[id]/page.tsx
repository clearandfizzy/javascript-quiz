"use server";
import React from "react";
import {QuestionForm} from "@/components/questions/QuestionForm";
import {getByKey} from "@/datasource/questions/QuestionRepository";
import {Question} from "@/types/QuestionType";

type QuestionsPageProps = {
	params: Promise<any>
}

const QuestionsPage = async ({params}: QuestionsPageProps) => {
	const [p] = await Promise.all([params]);
	const id = p.id as string;
	let questions: Question[] = [];

	try {
		questions = await getByKey(id);
	} catch (error) {
		console.error("Error fetching questions:", error);
	}
	if (!questions){
		return <></>
	}

	return (<>
		<div
			className="quiz-container max-w-md mx-auto p-4 sm:mt-8 sm:p-8 sm:border sm:rounded-xl sm:bg-white sm:shadow">
			<QuestionForm questions={questions}/>
		</div>
	</>);
}

export default QuestionsPage;