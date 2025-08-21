import {addPromptFromEventBody} from "./steps/actions/addPromptFromEventBody";
import {validateEventBody} from "./steps/validations/validateEventBody";
import {openAiCompletePrompt} from "./steps/actions/openAiCompletePrompt";
import {Step} from "./types/BlueprintType";

export const blueprint: Step[] = [
	validateEventBody,
	addPromptFromEventBody,
	openAiCompletePrompt,
];