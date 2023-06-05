import type { RequestHandler } from './$types';
import { STRAPI_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ cookies, request }) => {
	try {
		const req = await request.json();
		if (req.identifier == null || req.password == null)
			throw new Error('Missing identifier or password');

		const { identifier, password } = req;

		const res = await fetch(STRAPI_URL + '/api/auth/local', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ identifier, password })
		});

		if (res.ok == false)
			throw new Error(await res.text());

		const { jwt, user } = await res.json();
		cookies.set('jwt', jwt, { path: '/' });

		return new Response(JSON.stringify({ user }), { status: 200 });

	} catch (e: any) {
		return new Response(JSON.stringify({ error: e.message }), { status: 400 });
	}
}
