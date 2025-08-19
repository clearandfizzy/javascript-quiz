import {getStore} from "@netlify/blobs";

export const store = () => {
	return getStore({
		name: process.env.NEXT_NETLIFY_DATA_STORE_NAME as string,
		siteID: process.env.NEXT_NETLIFY_SITE_ID as string,
		token: process.env.NEXT_NETLIFY_AUTH_TOKEN as string,
		consistency: 'strong'
	});
}