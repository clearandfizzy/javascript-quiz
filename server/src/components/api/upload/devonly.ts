export const isDevOnly = (): Response | void => {
	if (process.env.NODE_ENV !== 'development') {
		return new Response("Forbidden", {status: 403, headers: {"Content-Type": "application/json"}});
	}
}