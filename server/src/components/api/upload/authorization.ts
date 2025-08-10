export const isAuthorized = (keyHeader: string | null): Response | void => {
	if (!keyHeader) {
		return new Response("OK 1", {status: 403});
	}

	if (!/^[a-z_]+$/.test(keyHeader)) {
		return new Response("OK 2", {status: 403});
	}

	if (keyHeader !== process.env.NEXT_SECRET_KEY) {
		return new Response("OK 3", {status: 403});
	}

}