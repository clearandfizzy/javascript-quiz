import {ActionStep} from "../../types/BlueprintType";
import {prompt} from '../../prompts/generateQuestion';
import {PartialDocument} from "../../types/DocumentType";
import OpenAI from "openai";

export const openAiCompletePrompt: ActionStep = async (
	doc: PartialDocument
) => {
	console.log("Processing openAiCompletePrompt");
	const openai = new OpenAI();

	console.log("OpenAiCompletePrompt", `${prompt} ${doc.prompt}`,);

	const response = await openai.responses.create({
		model: "gpt-4o",
		input: `${prompt} ${doc.prompt}`,
		text: {
			format: {
				type: "json_schema",
				name: "payload",
				schema: {
					type: "object",
					additionalProperties: false,
					required: ["questions"],
					properties: {
						questions: {
							type: "array",
							minItems: 25,
							maxItems: 25,
							items: {
								type: "object",
								additionalProperties: false,
								required: ["id", "text", "choices", "correctIndex", "explanation"],
								properties: {
									id: {type: "integer", minimum: 1, maximum: 25},
									text: {type: "string", minLength: 1},
									choices: {
										type: "array",
										items: {type: "string", minLength: 1},
										minItems: 4,
										maxItems: 4
									},
									correctIndex: {type: "integer", minimum: 0, maximum: 3},
									explanation: {type: "string", minLength: 1}
								}
							}
						}
					}
				}
			}
		}
	});

	doc.openAiResponse = response.output_text;

	return doc;

}