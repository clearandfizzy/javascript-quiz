import {Step} from "./types/BlueprintType";
import {addTopicFromEventBody} from "./steps/actions/addTopicFromEventBody";
import {validateEventBody} from "./steps/validations/validateEventBody";
import {openAiCompletePrompt} from "./steps/actions/openAiCompletePrompt";
import {addLabelFromEventBody} from "./steps/actions/addLabelFromEventBody";
import {createPayload} from "./steps/actions/createPayload";
import {extractQuestionFromResponse} from "./steps/actions/extractQuestionFromResponse";

export const blueprint: Step[] = [
	validateEventBody,
	addTopicFromEventBody,
	addLabelFromEventBody,
	createPayload,
	openAiCompletePrompt,
	extractQuestionFromResponse
];