import {Question} from "@/types/QuestionType";

export interface Result {
	questionId: number;
	correct: boolean;
	question: {
		text: Question['text']
	}
}
