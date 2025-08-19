import {store} from "@/datasource/netlify/lib/getStore";

export const getBlobList = async () => {
	try {
		const list = await store().list();
		return list.blobs.map(blob => blob.key);
	} catch (error) {
		console.error('Error fetching blob list:', error);
		throw new Error('Failed to fetch blob list from the data store.');
	}
}