import {getStore} from "@netlify/blobs";
import {isAuthorized} from "@/components/api/upload/authorization";
import fs from 'fs';
import path from 'path';

const POST = async (request: Request) => {
	isAuthorized(request.headers.get("Authorization"));
	// i want this to only work on localhost
	if (process.env.NODE_ENV !== 'development') {
		return new Response("Forbidden", {status: 403, headers: {"Content-Type": "application/json"}});
	}

	const uploadsDir = path.join(process.cwd(), 'src/data/json');
	const files = fs.readdirSync(uploadsDir);
	const fileList = files.map(file => ({name: file, path: path.join(uploadsDir, file)}));

	try {
		const store = getStore({
			name: process.env.NEXT_NETLIFY_DATA_STORE_NAME as string,
			siteID: process.env.NEXT_NETLIFY_SITE_ID as string,
			token: process.env.NEXT_NETLIFY_AUTH_TOKEN as string
		});

		const list = await store.list();
		for (const blob of list.blobs) {
			await store.delete(blob.key);
			console.log('deleted blob:', blob.key);
		}

		fileList.map(async (file) => {
			const questions = fs.readFileSync(file.path, 'utf-8');
			await store.set(`${file.name}`, questions);
			console.log('uploading blob:', file.name);
		});


	} catch (error) {
		console.error("Error uploading questions:", error);
		return new Response("Internal Server Error", {status: 500, headers: {"Content-Type": "application/json"}});
	}
	return new Response("OK", {status: 200, headers: {"Content-Type": "application/json"}});

}

export {POST};
