import {PartialDocument} from "../../types/DocumentType";
import {ActionStep} from "../../types/BlueprintType";

export const addPromptFromEventBody: ActionStep = async (
	doc: PartialDocument
): Promise<PartialDocument> => {
	console.log("Processing addPromptFromEventBody");
	doc.prompt = `Topic: ${JSON.parse(doc.eventBody).prompt}`;

	return doc;
};