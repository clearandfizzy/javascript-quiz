import {Question} from "@/types/QuestionType";

export const randomizeAnswers = (questions: Question[]) => {
	return questions.map((question: Question) => {
		const choices = question.choices;
		const correctText = choices[question.correctIndex];
		const updateChoices: (Array<string>) = new Array(choices.length - 1);

		for (const choice in choices) {
			updateChoices[getRandomIndex(choices, updateChoices)] = choices[choice];
		}
		question.choices = [...updateChoices];

		question.correctIndex = question.choices.findIndex((choice) => {
			return (choice === correctText)
		}) ?? 0;

		return question;
	});
}

const getRandomIndex = (
	choices: Question['choices'],
	updateChoices: Array<any>
) => {
	const i = Math.floor(Math.random() * choices.length);
	if (updateChoices[i] !== undefined) {
		return getRandomIndex(choices, updateChoices);
	}
	return i;
}