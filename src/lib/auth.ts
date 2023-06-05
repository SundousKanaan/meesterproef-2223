///import type { User } from '$lib/types';
///import UserStore from '$lib/user';
///import { browser } from '$app/environment';
///import { goto } from '$app/navigation';
///import { STRAPI_URL } from '$env/static/private';
///
///
///export async function login(identifier: string, password: string) {
///	const res = await fetch (`${STRAPI_URL}/api/auth/local`, {
///		method: 'POST',
///		headers: { 'Content-Type': 'application/json' },
///		body: JSON.stringify({ identifier, password })
///	});
///
///	if (res.ok) {
///		const data: { user: User; jwt: string } = await res.json();
///		if(data) {
///			UserStore
///		}
///		if(browser) {
///			localStorage.setItem('token', data.jwt);
///			goto('/');
///		}
///	} else {
///		const data: { message: { messages: { message: string }[] }[] } = await res.json();
///		if(data?.message[0]?.messages[0]?.message) {
///			throw new Error(data.message[0].messages[0].message);
///		}
///		throw new Error('An error occurred');
///	}
///}