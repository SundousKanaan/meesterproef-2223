<script lang="ts">
    import ChallengeBlock from "./ChallengeBlock.svelte";

    export let username: string;
    let challengeName: string;
</script>

<section>
    <h2>My challenges</h2>
    <a href="/challenge/create">Add challenge</a>

    <ul>
        <ChallengeBlock challengeName = {challengeName} username = {username}/>
	</ul>
</section>

<style lang="css">

    section{
        /* background-color: lightblue; */
        padding: 1em;
        border-left: solid .1em var(--gray-font);

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 4em auto;
    }

    h2{
        width: 100%;
        height: fit-content;
        font-size: 2em;
        font-family: var(--optima);
        font-weight: bold;

        align-self: center;
    }

    section > a{
        width: fit-content;
        height: fit-content;
        padding: var(--padding-button);
        background-color: var(--theme-color);
        align-self: center;
        justify-self: end;
    }

    ul{
        grid-column: 1/-1;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1em;
    }
</style>