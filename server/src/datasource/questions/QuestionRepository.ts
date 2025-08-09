'use server';

import {Question} from "@/types/QuestionType";
import {getStore} from "@netlify/blobs";
import {QuizType} from "@/types/QuizType";

type getByKeyType = (key: string) => Promise<Question[]>;

export const getByKey: getByKeyType = async (key: string) => {

	console.log('key', key);

	if (!/^[a-z]+$/.test(key)) {
		throw new Error('Invalid key format. Key must be a string of lowercase alphabetic characters.');
	}

	// check that the key exists in QuizType
	if (!Object.values(QuizType).includes(key as QuizType)) {
		throw new Error(`Invalid key: ${key}.`);
	}

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