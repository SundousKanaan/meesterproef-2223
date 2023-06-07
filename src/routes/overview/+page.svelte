<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    import '../../app.css';
</script>

<section class="boxed">
    <h1>Zoek naar challenges</h1>
    <form method="get">
        <fieldset>
            <input type="search" name="" id="">
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
<section class="boxed">
    <h2>Featured challenges</h2>
    <p>Doe mee aan de featured challenges!</p>
    <article>
        <div>
            <img src="" alt="">
            
        </div>
        <h3>test</h3>
        <p></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.</p>
        <a href="#">Meer informatie</a>
        <a href="#">Deelnemen</a>
        <em>deadline: <span></span></em>
    </article>
    <article><img src="" alt="">
        <h3>test</h3>
        <p></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.</p>
        <a href="#">Meer informatie</a>
        <a href="#">Deelnemen</a>
        <em>deadline: <span></span></em>
    </article>
    <article><img src="" alt="">
        <h3>test</h3>
        <p></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.</p>
        <a href="#">Meer informatie</a>
        <a href="#">Deelnemen</a>
        <em>deadline: <span></span></em>
    </article>
</section>

<style>

</style>