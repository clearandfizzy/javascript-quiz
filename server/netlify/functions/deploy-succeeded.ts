import {getStore} from "@netlify/blobs";
import {questions as javascript} from "../javascript/questions";
import {questions as tailwind} from "../tailwind/questions";
import {questions as react} from "../react/questions";
import {questions as magento2} from "../magento2/questions";

export default async () => {
	const store = getStore("file-uploads");

	const data = [
		{
			key: 'javascript',
			data: javascript,
		},
		{
			key: 'tailwind',
			data: tailwind,
		},
		{
			key: 'react',
			data: react,
		},
		{
			key: 'magento2',
			data: magento2,
		}
	];

	data.map(async (item) => {
		await store.set(`${item.key}.json`, JSON.stringify(item.data));
	})

	return new Response("File saved to blob storage after deploy.");
};