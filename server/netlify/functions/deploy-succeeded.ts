import {getStore} from "@netlify/blobs";

export default async () => {
	const store = getStore("questions");

	await store.set("test.txt", "Hello from post-deploy!");
	return new Response("File saved to blob storage after deploy.");
};