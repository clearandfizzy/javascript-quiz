import {ActionStep} from "../../types/BlueprintType";

export const extractQuestionFromResponse: ActionStep = async (
	doc
) => {
	console.log("Processing extractQuestionFromResponse");

	if (typeof doc.openAiResponse !== "string") {
		throw new Error("openAiResponse is not a string");
	}

	doc.question = JSON.parse(doc.openAiResponse);

	return doc;

}