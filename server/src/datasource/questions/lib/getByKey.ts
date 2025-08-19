'use server';

import {Question} from "@/types/QuestionType";
import {AllowedQuizTypes} from "@/types/AllowedQuizTypes";
import {BlobStorageRepository} from "@/datasource/netlify/BlobStorageRepository";
import {randomizeAnswers} from "@/datasource/questions/lib/randomizeAnswers";

type getByKeyType = (key: string) => Promise<Question[]>;

export const getByKey: getByKeyType = async (key: string) => {

	if (!/^[a-z0-9]+$/.test(key)) {
		throw new Error('Invalid key format. Key must be a string of lowercase alphabetic characters.');
	}

	if (!Object.values(AllowedQuizTypes).includes(key as AllowedQuizTypes)) {
		throw new Error(`Invalid key: ${key}.`);
	}

	try {
		const questions = await BlobStorageRepository().getBlobByKey(key);
		return JSON.parse(questions);
	} catch (error) {
		console.error('Error fetching questions:', error);
		throw new Error('Failed to fetch questions from the data store.');
	}

}