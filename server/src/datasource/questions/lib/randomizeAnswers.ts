import {Question} from "@/types/QuestionType";

export const randomizeAnswers = (questions: Question[]) => {
	return questions.map((question: Question) => {
		const choices = question.choices;
		const correctText = choices[question.correctIndex];
		
		// Fisher-Yates shuffle algorithm - O(n) instead of O(n²) with potential stack overflow
		const shuffledChoices = [...choices];
		for (let i = shuffledChoices.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledChoices[i], shuffledChoices[j]] = [shuffledChoices[j], shuffledChoices[i]];
		}
		
		question.choices = shuffledChoices;
		question.correctIndex = shuffledChoices.findIndex((choice) => choice === correctText) ?? 0;

		return question;
	});
}