import {getByKey} from "@/datasource/questions/lib/getByKey";
import {randomizeAnswers} from "@/datasource/questions/lib/randomizeAnswers";

export const QuestionRepository = () => {
	return {
		getByKey: async (key: string) => {
			const questions = await getByKey(key);
			return randomizeAnswers(questions);
		},
	};
}