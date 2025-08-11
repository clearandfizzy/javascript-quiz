import {urlConfig} from "@/url.config";
import {useRouter} from "next/navigation";
import {useQuestions} from "@/components/context/QuestionProvider";

export const useQuestionClick = () => {
	const {setQuestionKey} = useQuestions();
	const router = useRouter();

	const onQuestionClick = (quizKey: string) => {
		setQuestionKey(quizKey);
		router.push(`${urlConfig.endPoints.questions.replace('[id]', quizKey)}`);
	}

	return {onQuestionClick};
}