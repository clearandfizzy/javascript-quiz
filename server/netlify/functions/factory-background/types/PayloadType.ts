export interface Payload {
	model: string;
	input: string;
	text: {
		format: {
			type: FormatType;
			name: string;
			schema: {
				type: ObjectType;
				additionalProperties: boolean;
				required: Array<"questions">;
				properties: {
					questions: Question
				};
			};
		};
	};
}

type FormatType = "json_schema";

type ObjectType = "object" | "array" | "string" | "integer" | "boolean";

export interface Question {
	type: ObjectType,
	minItems: 25,
	maxItems: 25,
	items: {
		type: ObjectType,
		additionalProperties: false,
		required: Array<string>,
		properties: {
			id: { type: ObjectType, minimum: 1, maximum: 25 },
			text: { type: ObjectType, minLength: number },
			choices: {
				type: ObjectType,
				items: { type: ObjectType, minLength: 1 },
				minItems: 4,
				maxItems: 4
			},
			correctIndex: { type: ObjectType, minimum: 0, maximum: 3 },
			explanation: { type: ObjectType, minLength: 1 }
		}
	}
}
