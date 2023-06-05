import type { LayoutServerLoad } from './$types';
import { STRAPI_URL } from '$env/static/private';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const sessionid = cookies.get('jwt');
	const user = await fetch(STRAPI_URL + '/api/users/me', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + sessionid
		}
	});

	if (!user.ok) {
		return {
			user: null
		}
	}

	return {
		user: await user.json(),
		jwt: sessionid
	}
}