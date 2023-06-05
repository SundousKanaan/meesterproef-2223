import { browser } from '$app/environment';
import { readable, writable } from 'svelte/store';
import type { User } from '$lib/types';

function localStorageStore(key: string, initial: User | null) {
	if (browser == false)
		return readable(initial);

	const value = localStorage.getItem(key)
	const store = writable(value == null ? initial : JSON.parse(value));

	store.subscribe(v => localStorage.setItem(key, JSON.stringify(v)));

	return store;
}

const UserStore = localStorageStore('user', null);

export default UserStore;
