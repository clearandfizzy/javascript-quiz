import {useResults} from "@/components/context/ResultsProvider";
import {useQuestions} from "@/components/context/QuestionProvider";

export const useHandleChoice = () => {
	const {
		score,
		answered,
		setAnswered,
		setSelected,
		timerStarted,
		setTimerStarted,
		setSecondsElapsed,
		setScore,
		currentQuestion,
	} = useQuestions();

	const {results, setResults} = useResults();

	const onChoice = (answerIndex: number) => {
		window.scrollTo({ top: screen.height, behavior: "smooth" });

		if (answered) return;

		setSelected(answerIndex);
		setAnswered(true);

		if (!timerStarted) {
			setTimerStarted(true);
			setSecondsElapsed(Math.floor(Date.now() / 1000));
		}

		const correct = answerIndex === currentQuestion!.correctIndex;
		if (correct) setScore(score + 1);

		setResults([
			...results,
			{
				questionId: currentQuestion!.id,
				correct,
				question: {
					text: currentQuestion!.text,
				}
			},
		]);
	};

	return {onChoice};
};