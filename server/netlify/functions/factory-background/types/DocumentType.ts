import {Payload} from "./PayloadType";

export type PartialDocument = {
	eventBody: string;
	label?: string;
	topic?: string;
	question?: string[];
	openAiResponse?: string;
	openAiPayload?: Payload;
}
