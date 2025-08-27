import {ActionStep} from "../../types/BlueprintType";
import {PartialDocument} from "../../types/DocumentType";
import {OpenAiResponseType} from "../../types/OpenAiResponseType";

export const openAiCompletePrompt: ActionStep = async (
	doc: PartialDocument
) => {
	console.log("Processing openAiCompletePrompt");

	if (doc.openAiPayload === undefined) {
		throw new Error("openAiPayload is undefined");
	}

	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey) {
		throw new Error("OPENAI_API_KEY environment variable is not set");
	}

	let json: OpenAiResponseType | undefined;

	try {
		const response = await fetch("https://api.openai.com/v1/responses", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${apiKey}`,
			},
			body: JSON.stringify(doc.openAiPayload),
		});

		console.log('OpenAI API response status:', response.status);

		json = await response.json();
	} catch (e) {
		console.error("Error calling OpenAI API:", e);
		throw e;
	}

	doc.openAiResponse = json?.output[0].content[0].text ?? '';

	return doc;

}

