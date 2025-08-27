import {PartialDocument} from "../../types/DocumentType";
import {ValidationStep} from "../../types/BlueprintType";

export const validateEventBody: ValidationStep = async (
	doc: PartialDocument
) => {

	if (doc.eventBody === undefined || doc.eventBody === "") {
		throw new Error("Document must have an eventBody");
	}

	const json = JSON.parse(doc.eventBody);

	if (typeof json !== 'object' || json === null) {
		throw new Error("eventBody must be a valid JSON object");
	}
	if (!json.topic || typeof json.topic !== 'string') {
		throw new Error("eventBody must contain a valid prompt string");
	}

	if (!json.label || typeof json.label !== 'string') {
		throw new Error("eventBody must contain a valid label string");
	}

	return doc;

}