import {PartialDocument} from "./types/DocumentType";
import {blueprint as factory} from "./blueprint";

const handler = async (request: Request) => {

	const doc: PartialDocument = {
		eventBody: await request.text() ?? ''
	}

	const final = await factory.reduce(async (acc, step) => {
		return step(await acc);
	}, Promise.resolve(doc));


	console.log(final);

	return new Response(JSON.stringify({
		message: 'Factory Background',
		data: final
	}), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});

};

export default handler;