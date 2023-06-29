<script>
let challenges = [
    {
        img: "/shoe.webp",
        participants: 250,
        title: "Web development",
        subtitle: "test",
        description: "Ontwikkel je vaardigheden in webontwikkeling en maak kennis met de nieuwste technologieën en frameworks. Leer hoe je boeiende en responsieve websites kunt bouwen.",
        infoLink: "#",
        enrollLink: "#",
        deadline: "25-12-2023"
    },
    {
        img: "/eye.png",
        participants: 200,
        title: "Graphic design",
        subtitle: "course",
        description: "Leer de basisprincipes van grafisch ontwerp en ontwikkel je creatieve vaardigheden. Verken verschillende ontwerphulpmiddelen en -technieken.",
        infoLink: "#",
        enrollLink: "#",
        deadline: "15-12-2023"
    },
    {
        img: "/beans.png",
        participants: 180,
        title: "Culinary Arts",
        subtitle: "course",
        description: "Verdiep je in de culinaire kunsten en ontdek de geheimen achter heerlijke gerechten. Leer koken als een professional en experimenteer met verschillende smaken.",
        infoLink: "#",
        enrollLink: "#",
        deadline: "20-12-2023"
    },
    {
        img: "/shoe.webp",
        participants: 210,
        title: "Sports Science",
        subtitle: "test",
        description: "Onderzoek de wetenschap achter sport en lichaamsbeweging. Leer over anatomie, fysiologie en trainingsprincipes om atletische prestaties te verbeteren.",
        infoLink: "#",
        enrollLink: "#",
        deadline: "22-12-2023"
    },
    {
        img: "/eye.png",
        participants: 220,
        title: "Photography",
        subtitle: "course",
        description: "Ontwikkel je fotografische vaardigheden en leer hoe je verbluffende foto's kunt maken. Verken verschillende genres, van landschapsfotografie tot portretfotografie.",
        infoLink: "#",
        enrollLink: "#",
        deadline: "25-12-2023"
    },
    {
        img: "/beans.png",
        participants: 230,
        title: "Coffee Tasting",
        subtitle: "course",
        description: "Ontdek de kunst van koffieproeven en leer verschillende smaken en aroma's te onderscheiden. Leer hoe je de perfecte kop koffie kunt zetten.",
        infoLink: "#",
        enrollLink: "#",
        deadline: "27-12-2023"
    }
];

</script>

<section class="boxed">
    <h2>My challenges</h2>
    <span>Your current, liked and past challenges in a list</span>
    {#each challenges as challenge}
        <article>
            <figure>
                <img src={challenge.img} alt=""/>
                <figcaption>
                    <div class="bookmark">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L5.62666 17.9333L16 28.3067L26.3733 17.9333L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666V6.14666Z" fill="#FF4B4B" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="deelnemers">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                    />
                    <path
                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                    />
                </svg>
                        <p>{challenge.participants}</p>
                    </div>
                </figcaption>
            </figure>
            <div class="group">
                <div class="detail">
                    <h3>{challenge.title}</h3>
                    <caption>{challenge.subtitle}</caption>
                </div>
                <p>{challenge.description}</p>
                <div class="side-container">
                    <a href={challenge.infoLink} class="meerInformatie">Meer informatie</a>
                    <a href={challenge.enrollLink} class="enroll">Enroll</a>
                    <em>deadline: {challenge.deadline}</em>
                </div>
            </div>
        </article>
    {/each}
</section>

<style>
        em {
        font-size: 0.8em;
        color: #73738c;
    }

    .group {
        padding: 1em;
        gap: 0.5em;
        display: flex;
        flex-direction: column;
    }

    .detail {
        gap: 0.5em;
    }
    caption {
        color: #6e98ff;
        font-weight: 600;
        font-size: 0.75em;
    }
    .side-container {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .group > p {
        margin-bottom: 1em;
    }

    .boxed:first-of-type {
        margin-top: 4em;
    }

    .boxed:nth-child(2) {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    .boxed > h2{
        width: 100%;
    }

    h3 {
        order: -1;
    }

    section > span:first-of-type{
        width:100%;
    }

    .boxed {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
        gap: 1em;
    }
    .boxed article {
        flex: 1 1 17em;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        min-width:30%;
    }

    a.meerInformatie {
        padding: 1em;
        border: 0.1875em solid black;
        background-color: white;
        width: 100%;
        text-decoration: none;
        color: black;
        text-align: center;
    }

    a.enroll {
        padding: 1em;
        background-color: #ffeb66;
        width: 100%;
        text-decoration: none;
        color: black;
        text-align: center;
        box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
    }
    article figure img {
        height: 100%;
        width: 100%;
    }

    article {
        background-color: white;
        overflow: hidden;

    }

    article figure {
        position: relative;
    }

    .deelnemers {
        position: absolute;
        top: 1em;
        left: 1em;
        padding: 0.5em;
        background: white;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
    }
    .bookmark {
        position: absolute;
        top: 1em;
        right: 1em;
        padding: 0.5em;
        background: white;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    
    figure{
        overflow:hidden;
        position:relative;
        display:flex;
    }
    figure img{
        transition:.2s;
        object-fit:cover;
    }
    figure img:hover{
        transform:scale(1.15)
    }
</style>