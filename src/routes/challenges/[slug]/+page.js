import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params  }) {
    if (params.slug === 'hoi') {
        return {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
    }

    throw error(404, 'Not found');
}