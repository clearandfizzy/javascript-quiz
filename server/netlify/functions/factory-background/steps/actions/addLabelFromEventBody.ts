import {PartialDocument} from "../../types/DocumentType";
import {ActionStep} from "../../types/BlueprintType";

export const addLabelFromEventBody: ActionStep = async (
	doc: PartialDocument
): Promise<PartialDocument> => {
	console.log("Processing addLabelFromEventBody");
	doc.label = `${JSON.parse(doc.eventBody).label}`;

	return doc;
};