
import { getStore } from "@netlify/blobs";

export default async (req: any, context: any) => {
	const store = getStore("file-uploads");
	await store.set("hello.txt", "Hello from post-deploy!");
	return new Response("File saved to blob storage after deploy.");
};