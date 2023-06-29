<script>
    const work = [
        {image: "/src/lib/assets/work1.png"},
        {image: "/src/lib/assets/work2.jpeg"},
        {image: "/src/lib/assets/work3.jpeg"},
        {image: "/src/lib/assets/work4.png"},
        {image: "/src/lib/assets/work5.png"},
        {image: "/src/lib/assets/work6.png"}
    ]
</script>

<section>
    <h1>Description</h1>
    <p>Logo design for Saenyo. Process and final logo. I tried a couple of variations and Peter (Artist) picked the final logo. It was based on his love for vintage audio brands and tape recordings.</p>
    <div class="image-grid">
        {#each work as item}
        <img src={item.image} alt="">
        {/each}
    </div>
</section>

<style>
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    section {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
    }

    section .image-grid {
        overflow-y: scroll;
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    section .image-grid img {
        width: 100%;
    }

    @media (max-width: 600px) {
    section .image-grid {
        grid-template-columns: 1fr;
        }
    }
</style>