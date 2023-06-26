<script lang="ts">
    export let participantData: {
        name: string;
        userTag: string;
        icon: string | undefined;
        skills: string[];
        submissionDate: Date;
        formattedDate: string;
        country: string;
        statistics: {
            likes: number;
            views: number;
        };
    }[] = [
        {
            name: 'Safouane',
            userTag: '@safouane',
            icon: '/man1.jpg',
            skills: [ 'PHP', 'Laravel', 'C+-', 'JavaScript'],
            submissionDate: new Date('2023-06-01'),
            formattedDate: '',
            country: 'Netherlands',
            statistics: {
                likes: 10,
                views: 100,
            },
        },
        {
            name: 'Jesse',
            userTag: '@jessr',
            icon: '/man1.jpg',
            skills: ['UX design', 'Communication', 'HTML', 'CSS', 'JavaScript'],
            submissionDate: new Date('2023-03-02'),
            formattedDate: '',
            country: 'Sweden',
            statistics: {
                likes: 64,
                views: 210,
            },
        },
        {
            name: 'Ting',
            userTag: '@IntingTing',
            icon: '/man1.jpg',
            skills: ['UX design', 'HTML', 'CSS', 'JavaScript'],
            submissionDate: new Date('2023-12-02'),
            formattedDate: '',
            country: 'Germany',
            statistics: {
                likes: 14,
                views: 310,
            },
        },
        {
            name: 'Bram',
            userTag: '@casper',
            icon: '/man1.jpg',
            skills: ['UX design', 'JavaScript'],
            submissionDate: new Date('2023-04-01'),
            formattedDate: '',
            country: 'South Africa',
            statistics: {
                likes: 104,
                views: 560,
            },
        },
    ];

    // Format the submissionDate property of each participant
    participantData.forEach(participant => {
    participant.formattedDate = participant.submissionDate.toLocaleDateString();
});
</script>

<section class="participantData">
    <div class="title-block">
        <h2>Challenge participants</h2>
    </div>
    <section>
        <h3>Creator</h3>
        <h3>Skills</h3>
        <h3>Submission date</h3>
        <h3>Country</h3>
    </section>
    {#if participantData}
        {#each participantData as user}
            <section class="participant-block">
                <div class="user-block">
                    <img src={user.icon} alt="" />
                    <div class="wrapper">
                        {user.name}
                        <span>{user.userTag}</span>
                    </div>
                </div>
                <ul class="skills-block">
                    {#each user.skills as skill}
                        <li>{skill}</li>
                    {/each}
                </ul>
                <div>
                    <p>{user.formattedDate}</p>
                </div>
                <p>{user.country}</p>
            </section>
        {/each}
    {/if}
</section>

<style>
    :root {
        --skill-color: #BAE4E8;
    }

    .participantData {
        margin: 0 auto;
        margin-top: 4em;
        margin-bottom: 4em;
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .participantData .title-block {
        display: flex;
        justify-content: space-between;
    }

    .participantData section:first-of-type {
        display: grid;
        border-top: 2px solid black;
        margin-top: 2em;
        padding-top: 1em;
        padding-bottom: 1em;
        grid-template-columns: 1fr 2fr 1fr 1fr;
    }

    .participantData .participant-block {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        border: 2px solid black;
        box-sizing: border-box;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .participantData .participant-block .user-block {
        display: flex;
        align-items: center;
        height: 5em;
    }

    .participantData .participant-block .user-block .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: .5em;
    }

    .participantData .participant-block .user-block .wrapper span {
        font-size: .9em;
    }

    .participantData .participant-block .user-block img {
        border-radius: 100%;
        margin: .5em;
        width: 4em;
        grid-row: 1 / span 2;
    }

    .participantData .participant-block .user-block h3 {
        grid-row: 1 / 2;
    }

    .participantData .participant-block:not(:last-of-type) {
        border-bottom: none;
    }

    .participantData .participant-block .skills-block {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
    }

    .participantData .participant-block .skills-block li {
        background-color: var(--skill-color);
        padding: .5em;
        margin: .1em;
    }
    
    @media (max-width: 60em) { 
        .participantData section:first-of-type {
            display: none;
        }

        .participantData .participant-block {
            margin-top: 1em;
            grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
        }

        .participantData .participant-block p {
            text-align: center;
            margin-top: .5em;
        }

        .participantData .participant-block .user-block {
            justify-content: center;
        }

        .participantData .participant-block .skills-block {
            margin-bottom: .5em;
            justify-content: center;
        }

        .participantData .participant-block:not(:last-of-type) {
            border-bottom: 2px solid black;
        }
    }

</style>