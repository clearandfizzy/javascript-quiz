import {PartialDocument} from "../../types/DocumentType";
import {ActionStep} from "../../types/BlueprintType";

export const addTopicFromEventBody: ActionStep = async (
	doc: PartialDocument
): Promise<PartialDocument> => {
	console.log("Processing addTopicFromEventBody");
	doc.topic = `Topic: ${JSON.parse(doc.eventBody).topic}`;

	return doc;
};