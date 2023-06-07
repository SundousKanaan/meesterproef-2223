<header>
    <ul class="breadcrumbs">
        <li>
            <a href="#">test</a>
        </li>
        <li>
            <a href="#">test2</a>
        </li>
        <li>
            <a href="#">test3</a>
        </li>
    </ul>
    <h1>Build an environment with Fix XSS vulnerability as its core feature</h1>
    <p>Binnen de opleiding van HvA is men alleen geacht om een veilige online omgeving te maken. Somminge mensen weten niet wat XSS vulnerability is. Daarom is deze challenge toegevoegd voor mensen die hun applicaties veiliger moeten maken.</p>
    <div class="collab-wrap">
        <button class="cta">Deelnemen</button>
        <button>Samenwerken</button>
        <div>
            <img src="https://placehold.co/600x400" alt=""/>
            <img src="https://placehold.co/600x400" alt=""/>
            <img src="https://placehold.co/600x400" alt=""/>
            <p><span>number</span> mensen doen mee!</p>
        </div>
    </div>
</header>

<main>
    
</main>

<style>
    :root {
        --cta-color: #21BDE5;
    }

    header {
        width: 100%;
        height: 50dvh;
    }

    header h1 {
        font-size: 2.5em;
    }

    span {
        font-weight: bold;
    }

    header .breadcrumbs {
        display: flex;
        gap: 1.5em;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    header .collab-wrap {
        display: flex;
        gap: 1em;
    }

    header .collab-wrap .cta {
        background-color: var(--cta-color);
    }

    header .collab-wrap button {
        padding: 1em 2em 1em 2em;
    }

    header .collab-wrap .cta:hover {
       opacity: 0.8;
    }

    header .collab-wrap div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    header .collab-wrap div img:nth-of-type(2) {
        transform: translate(-5px);
    }

    header .collab-wrap div img:nth-of-type(3) {
        transform: translate(-10px);
    }

    header .collab-wrap div img {
        border-radius: 100%;
        object-fit: cover;
        width: 22px;
        height: 22px;
    }
</style>