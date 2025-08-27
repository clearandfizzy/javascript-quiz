export interface OpenAiResponseType {
	id: string;
	object: string;
	created_at: number;
	status: string;
	background: boolean;
	error: string | null;
	incomplete_details: unknown | null;
	instructions: unknown | null;
	max_output_tokens: number | null;
	max_tool_calls: number | null;
	model: string;
	output: Array<OutputType>;
}

interface OutputType {
	id: string;
	type: string;
	status: string;
	content: Array<ContentType>;
	role: string;
}

interface ContentType {
	type: string;
	annotations: unknown[];
	logprobs: unknown[];
	text: string;
}