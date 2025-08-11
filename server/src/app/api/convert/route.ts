import {writeFile} from "fs/promises";
import {isAuthorized} from "@/components/api/upload/authorization";
import {isDevOnly} from "@/components/api/upload/devonly";
import {questions as Trees} from "@/data/old/europeantrees/questions";
import {questions as Flowers} from "@/data/old/flowers/questions";

export const GET = async (req: Request) => {
	isDevOnly();
	isAuthorized(req.headers.get('Authorization'));

	await writeFile("@/trees.json", JSON.stringify(Trees, null, 2));
	await writeFile("flowers.json", JSON.stringify(Flowers, null, 2));

	return new Response("OK", {status: 200});
}