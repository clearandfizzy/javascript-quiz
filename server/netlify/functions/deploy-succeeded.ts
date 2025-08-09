import {getStore} from "@netlify/blobs";
import {questions as javascript} from "../javascript/questions";
import {questions as tailwind} from "../javascript/questions";
import {questions as react} from "../javascript/questions";
import {questions as magento2} from "../javascript/questions";

export default async () => {
	const store = getStore("questions");

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

	data.forEach((item) => {
		store.set(`${item.key}.json`, JSON.stringify(item.data));
	})

	return new Response("File saved to blob storage after deploy.");
};