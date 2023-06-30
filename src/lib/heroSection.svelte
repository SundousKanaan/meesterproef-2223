<script>
  import { createEventDispatcher } from 'svelte';
  let enrolled = false;

  const dispatch = createEventDispatcher();

  function openModal() {
    dispatch('openModal');
  }

  function openEnrollModal() {
    dispatch('openEnrollModal');
    enrolled = true;
  }

  function cancelEnroll() {
    enrolled = false;
  }

    const pageTitle = 'Immersive Retail Experience'
    const pageDescription = 'How to create an Immersive Retail Experience for Asics shoes Europe'
    const participants = 123
    const breadcrumbs = ['home', 'challenges', 'challengeDetail'];
</script>

<section class="hero">
    <div>
        <ul class="breadcrumbs">
            <li>
                <a href="#">{breadcrumbs[0]}</a>
            </li>
            <li>
                <a href="#">{breadcrumbs[1]}</a>
            </li>
            <li>
                <a href="#">{breadcrumbs[2]}</a>
            </li>
        </ul>
        <h1>{pageTitle}</h1>
        <h2>{pageDescription}</h2>
        <div class="button-wrapper">
            {#if enrolled}
                <button class="cta enrolled" on:click={cancelEnroll}>Enrolled</button>
            {:else}
                <button class="cta" on:click={openEnrollModal}>Enroll</button>
            {/if}
            <button class="secondary-cta" on:click={openModal}>Cooperative enrollment</button>
        </div>
        <div>
            <img src="/man1.jpg" alt=""/>
            <img src="/man2.jpg" alt=""/>
            <img src="/man3.jpg" alt=""/>
            <p><span>{participants}</span> have already enrolled!</p>
        </div>
    </div>
</section>

<style>
    :root {
        --cta-color: #21BDE5;
        --yellow: #FFEB66;
        --hover: #BAE4E8;
        --white: #FFFFFF;
        --black: #000000;
    }

    .hero {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 2em;
        background-image: url('/hero_no_content.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    span {
        font-weight: bold;
    }

    button {
        font-size: 1em;
        cursor: pointer;
        border: none;
        transition: all .2s ease-in-out;
    }

    .cta {
        width: 15em;
        color: var(--white);
        background-color: var(--cta-color);
        padding: 1em 2em 1em 2em;
    }

    .secondary-cta {
        width: 20em;
        color: var(--black);
        border: .25em solid var(--cta-color);
        padding: .8em 1.8em .8em 1.8em;
    }

    .secondary-cta:hover,
    .cta:hover {
        filter: saturate(1.5);
    }

    .enrolled:before {
        content: '✓ ';
    }

    .enrolled:hover {
        filter: grayscale(60%);
    }

    .enrolled:hover:before {
        content: '✖ ';
    }

    .hero > div {
        display: flex;
        flex-direction: column;
        padding: 1.3em;
        padding-top: 3.5em;
    }

    .hero > div:first-of-type {
        order: 2;
    }

    .hero > div:last-of-type {
        justify-content: center;
    }

    .hero > div h1 {
        font-size: 2em;
        width: 70%;
        margin-bottom: .6em;
        padding-left: 0.2em;
        color: var(--white);
        background-color: var(--black);
    }

    .hero > div h2 {
        font-size: 2em;
        width: 70%;
        margin-bottom: .6em;
        padding-left: 0.2em;
        color: var(--yellow);
        background-color: var(--black);
    }

    .hero div .breadcrumbs {
        display: flex;
        gap: 1.5em;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 1em;
    }

    .hero div .breadcrumbs li a {
        color: var(--white);
        position: relative;
    }

    .hero div .breadcrumbs li a:hover {
        color: var(--hover);
    }

    .hero div .breadcrumbs li:not(:last-of-type) a:after {
        color: var(--cta-color);
        content: ">";
        position: absolute;
        right: -1.2em;
    }

    .hero div .button-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 1em;
    }

    .hero div > div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-top: 1em;
    }

    .hero div > div img:nth-of-type(2) {
        transform: translate(-5px);
    }

    .hero div > div img:nth-of-type(3) {
        transform: translate(-10px);
    }

    .hero div > div img {
        border-radius: 100%;
        object-fit: cover;
        width: 22px;
        height: 22px;
    }

    .hero div > div p {
        color: var(--white);
    }

    @media screen and (min-width: 368px) {
        .hero > div h1 {
            width: 90%;
        }

        .hero > div h2 {
            width: 90%;
        }
    }

    @media screen and (min-width: 768px) {
        .hero > div {
            padding: 6em;
            padding-bottom: 6em;
        }

        .hero > div h1 {
            font-size: 2.5em;
            width: 14em;
            margin-bottom: .6em;
            padding-left: 0.2em;
            color: var(--white);
            background-color: var(--black);
        }

        .hero > div h2 {
            font-size: 2em;
            width: 14em;
            margin-bottom: .6em;
            padding-left: 0.2em;
            color: var(--yellow);
            background-color: var(--black);
        }

        .hero div > div {
            align-items: center;
        }

        .hero div .button-wrapper {
            flex-direction: row;
        }
    }
</style>
