import {useQuestions} from "@/components/context/QuestionProvider";
import {useRouter} from "next/navigation";
import {urlConfig} from "@/url.config";
import {useParams} from "next/navigation";

type HandleNextButtonType = () => void;

export const useNextButton = () => {

	const params = useParams();
	const id = params.id as string;
	const {setAnswered, setSelected, idx, setIdx, questionLimit} = useQuestions();
	const router = useRouter();

	const handleNextButton: HandleNextButtonType = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
		if (idx === questionLimit) {
			router.push(urlConfig.endPoints.results.replace('[id]',id));
			return;
		}
		setAnswered(false);
		setSelected(undefined);
		setIdx(idx + 1);
	}

	return {handleNextButton};
}
