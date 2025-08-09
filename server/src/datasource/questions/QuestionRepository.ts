'use server';

import {Question} from "@/types/QuestionType";
import {getStore} from "@netlify/blobs";

type getByKeyType = (key: string) => Promise<Question[]>;

export const getByKey: getByKeyType = async (key: string) => {

	console.log('key', key);

	if (!/^[a-z]+$/.test(key)) {
		throw new Error('Invalid key format. Key must be a string of lowercase alphabetic characters.');
	}

	return [
		{
			"id": 1,
			"text": "What is the output of typeof null in JavaScript?",
			"choices": ["null", "object", "undefined", "boolean"],
			"correctIndex": 1,
			"explanation": "<ul><li><strong>object</strong>: JS quirk—typeof null reports \"object\".</li></ul>"
		},
		{
			"id": 2,
			"text": "Which array method adds one or more elements to the end?",
			"choices": ["pop", "push", "shift", "unshift"],
			"correctIndex": 1,
			"explanation": "<ul><li><strong>push</strong>: adds items to the end.</li><li>pop: removes the last item.</li><li>shift: removes the first item.</li><li>unshift: adds items to the front.</li></ul>"
		}];


	const store = getStore({
		name: process.env.NEXT_NETLIFY_DATA_STORE_NAME as string,
		siteID: process.env.NEXT_NETLIFY_SITE_ID as string,
		token: process.env.NEXT_NETLIFY_AUTH_TOKEN as string,
		consistency: 'strong'
	});

	try {
		const questions = await store.get(key);
		return JSON.parse(questions);
	} catch (error) {
		console.error('Error fetching questions:', error);
		throw new Error('Failed to fetch questions from the data store.');
	}

}