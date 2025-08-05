import {useQuestions} from "@/components/context/QuestionProvider";
import {useRouter} from "next/navigation";

type HandleNextButtonType = (lastQuestionIndex: number) => void;

export const useNextButton = () => {

	const {setAnswered, setSelected, idx, setIdx} = useQuestions();
	const router = useRouter();

	const handleNextButton: HandleNextButtonType = (lastQuestionIndex) => {
		window.scrollTo({top: 0, behavior: 'smooth'});
		if (idx === lastQuestionIndex) {
			router.push('/results');
			return;
		}
		setAnswered(false);
		setSelected(undefined);
		setIdx(idx + 1);
	}

	return {handleNextButton};
}
