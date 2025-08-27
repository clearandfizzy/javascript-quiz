import {ActionStep} from "../../types/BlueprintType";
import {prompt} from '../../prompts/generateQuestion';

export const createPayload: ActionStep = async (
	doc
) => {
	console.log("Processing createPayload");

	doc.openAiPayload = {
		model: "gpt-4o",
		input: `${prompt} ${doc.topic}`,
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
	};

	return doc;

}