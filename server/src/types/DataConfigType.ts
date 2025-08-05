import {Question} from "@/types/QuestionType";

export type DataConfigType = {
	key: string;
	label: string;
	path: string;
	questions?: Question[];
	description: string;
}
