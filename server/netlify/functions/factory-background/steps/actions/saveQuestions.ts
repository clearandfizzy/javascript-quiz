import {getStore} from "@netlify/blobs";
import {ActionStep} from "../../types/BlueprintType";

export const saveQuestions: ActionStep = async (
	doc
) => {
	const store = () => {
		return getStore({
			name: process.env.NEXT_NETLIFY_DATA_NEWSTORE_NAME as string,
			siteID: process.env.NEXT_NETLIFY_SITE_ID as string,
			token: process.env.NEXT_NETLIFY_AUTH_TOKEN as string,
			consistency: 'strong'
		});
	}

	if (doc.label === undefined) {
		throw new Error("label is undefined");
	}
	if (doc.question === undefined) {
		throw new Error("question is undefined");
	}

	console.log(doc.question);

	await store().setJSON(doc.label, doc.question);

	return doc;

}