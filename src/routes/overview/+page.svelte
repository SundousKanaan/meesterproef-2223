<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    import '../../app.css';
    import FeaturedChallenges from "$lib/featuredChallenges.svelte";
    import TopThreeChallenges from "$lib/topThreeChallenges.svelte";

</script>
<main>
    <section class="boxed">
        <h1>Challenges</h1>
        <form method="get">
            <fieldset>
                <input type="search" placeholder="Zoek naar challenges" name="" id="">
                <input type="submit" value="">
            </fieldset>
        
            <fieldset>
                <label>Discover
                    <input type="checkbox" name="discover" id="">
                </label>
                <label>Animaties
                    <input type="checkbox" name="grow" id="">
                </label>
                <label>Branding
                    <input type="checkbox" name="branding" id="">
                </label>
                <label>Illustraties
                    <input type="checkbox" name="illustraties" id="">
                </label>
                <label>Mobiel
                    <input type="checkbox" name="mobiel" id="">
                </label>
                <label>Print
                    <input type="checkbox" name="print" id="">
                </label>
                <label>Web Design
                    <input type="checkbox" name="webDesign" id="">
                </label>
                <label>Typografie
                    <input type="checkbox" name="typografie" id="">
                </label>
                <label>Web Development
                    <input type="checkbox" name="webDevelopment" id="">
                </label>
                <div>
                    <label>
                    <select name="sorteer">
                        <option value="nieuw">Nieuw</option>
                        <option value="oud">Oud</option>
                        <option value="populair">Populair</option>
                    </select></label>
                </div>
            </fieldset>
        </form>
    </section>
    <span class="divider"></span>
    <FeaturedChallenges/>
    <span class="divider"></span>
    <TopThreeChallenges/>
</main>

<style>

.divider{
    height:4em;
}
h1{
    position:absolute;
    left:-9999em;
    opacity:.1;
}
fieldset:first-of-type {
    display:flex;
    flex-wrap:nowrap;
    height:3em;
}
fieldset:first-of-type > *{
    justify-content:space-between;
    background:#F3F3F4;
}
fieldset:first-of-type > input[type="search"]{
    flex: 1 1 20em;
    padding:1em;
}
fieldset:first-of-type > input[type="submit"]{
    flex:1 1 3em;
    max-width:5em;
}
fieldset:last-of-type{
    margin-top:2em;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap:.5em;
    font-size:.8em;
    align-items: center;
}
fieldset:last-of-type label input[type="checkbox"]{
    display:none;
}
fieldset:last-of-type label{
padding:.7em;
}
fieldset:last-of-type label:has(input[type="checkbox"]:checked){
    background:#F3F3F4;
}
fieldset:last-of-type label:last-of-type {
    margin-right: auto;
}
input, fieldset, button, select {
    border: none;
}

main > *{
    gap:2em;
}
main{
    overflow:hidden;
}
</style>