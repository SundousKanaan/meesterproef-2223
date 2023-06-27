<script>
    import { onMount } from 'svelte';

    import Article from '$lib/Article.svelte';
    let challenges = [
        {
            imgSrc: 'https://images.pexels.com/photos/13730872/pexels-photo-13730872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            peopleCount: 25,
            title: 'Web develo123123pment',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'May 1, 2023 - June 30, 2023',
            organization: 'UAUS'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg',
            peopleCount: 30,
            title: 'Graphic123213 design',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'June 1, 2023 - July 31, 2023',
            organization: 'DesignCo'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg',
            peopleCount: 30,
            title: 'Graphic design',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'June 1, 2023 - July 31, 2023',
            organization: 'DesignCo'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg',
            peopleCount: 30,
            title: 'Graphic design',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'June 1, 2023 - July 31, 2023',
            organization: 'DesignCo'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
            peopleCount: 15,
            title: 'Graphic design',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'July 1, 2023 - August 31, 2023',
            organization: 'AppDev'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg',
            peopleCount: 20,
            title: 'Data Science',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'July 1, 2023 - August 31, 2023',
            organization: 'DataInc'
        }
    ];

</script>

<section>
    <h1>Your signed up challenges</h1>
    <p>View and update the signed up challenges you signed up for</p>
    {#each challenges as challenge }
        <Article
                imgSrc={challenge.imgSrc}
                peopleCount={challenge.peopleCount}
                title={challenge.title}
                description={challenge.description}
                timeline={challenge.timeline}
                organization={challenge.organization}
        />
    {/each}
</section>
