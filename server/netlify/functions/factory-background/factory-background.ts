import {PartialDocument} from "./types/DocumentType";
import {blueprint as factory} from "./blueprint";
import {saveQuestions} from "./steps/actions/saveQuestions";


const handler = async (request: Request) => {

	const doc: PartialDocument = {
		eventBody: await request.text() ?? ''
	}

	const final = await factory.reduce(async (acc, step) => {
		return step(await acc);
	}, Promise.resolve(doc));

	await saveQuestions(final);

	return new Response(JSON.stringify({
		message: 'Factory Background',
		data: "Success"
	}), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});

};

export default handler;