<script>

</script>

<section class="boxed">
    <h2>Featured challenges</h2>
    <p>Doe mee aan de featured challenges!</p>
    <article>
        <h3>test</h3>
        <figure>
            <img src="" alt="">
            <figcaption>
                <div>
                    <p>
                        <img src="" alt="">250
                    </p>
                </div>
                <button><img src="" alt=""></button>
            </figcaption>
        </figure>
        <p></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.</p>
        <a href="#">Meer informatie</a>
        <a href="#">Deelnemen</a>
        <em>deadline: <span></span></em>
    </article>
    <article>
        <h3>test</h3>
        <figure>
            <img src="" alt="">
            <figcaption>
                <div><p><img src="" alt="">250</p></div>
                <button><img src="" alt=""></button>
            </figcaption>
        </figure>
        <p></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.</p>
        <a href="#">Meer informatie</a>
        <a href="#">Deelnemen</a>
        <em>deadline: <span></span></em>
    </article>
    <article>
        <h3>test</h3>
        <figure>
            <img src="" alt="">
            <figcaption>
                <div><p><img src="" alt="">250</p></div>
                <button><img src="" alt=""></button>
            </figcaption>
        </figure>
        <p></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.</p>
        <a href="#">Meer informatie</a>
        <a href="#">Deelnemen</a>
        <em>deadline: <span></span></em>
    </article>
</section>

<style>
    .boxed > h2, .boxed > p{
        width:100%;
    }
    h3{
        order:-1;
    }
    .boxed{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        flex-direction: row;
        gap:1em;
    }
    .boxed article{
        flex: 1 1 30%;
    }
    article figure img{
        background:gray;
        height:100%;
        width:100%;
    }
    article figure{
        position:relative;
        height:12em;
    }
    figcaption{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
</style>