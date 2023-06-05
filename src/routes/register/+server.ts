import type { RequestHandler } from "./$types";
import { STRAPI_URL } from "$env/static/private";

export const POST: RequestHandler = async ({ cookies, request }) => {
	try {
		const req = await request.json();
		if (req.username == null || req.email == null || req.password == null)
			throw new Error("Missing username, email or password");

		const { username, email, password } = req;

		const res = await fetch(STRAPI_URL + "/api/auth/local/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, email, password }),
		});

		if (res.ok == false) throw new Error(await res.text());

		const data = await res.json();
		console.log(data);
		const { jwt, user } = data;

		if(jwt)
			cookies.set("jwt", jwt, { path: "/" });

		return new Response(JSON.stringify({ user }), { status: 200 });

	} catch (e: any) {
		return new Response(JSON.stringify({ error: e.message }), {
			status: 400,
		});
	}
};