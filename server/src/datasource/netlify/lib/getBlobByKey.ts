import {store} from "@/datasource/netlify/lib/getStore";

export const getBlobByKey = async (key: string) => {
	if (!/^[a-z0-9]+$/.test(key)) {
		throw new Error('Invalid key format. Key must be a string of lowercase alphabetic characters.');
	}

	try {
		return await store().get(`${key}.json`);
	} catch (error) {
		console.error('Error fetching blob:', error);
		throw new Error('Failed to fetch blob from the data store.');
	}
}