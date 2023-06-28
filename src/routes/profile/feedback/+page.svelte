<svelte:head>
    <title>Your Feedback</title> 
</svelte:head>

<script>
    import beans from '$lib/assets/art.png';
    import eye from '$lib/assets/beans.png';
</script>

<main>
    <section>
        <h1>Feedback</h1>
        <p>Here you'll see the submissions you got feedback on.</p>

        <article class="challenge-block">
            <figure>
                <img src={beans} alt=""/>
                <div class="overlay">
                    <h4>Idolish drawing</h4>
                    <p>Sundous</p>
                </div>
            </figure>
        </article>

        <article class="challenge-block">
            <figure>
                <img src={eye} alt=""/>
                <div class="overlay">
                    <h4>Idolish drawing</h4>
                    <p>Sundous</p>
                </div>
            </figure>
        </article>
    </section>

    <aside>
        <div>
            <img src="" alt="">
            <button>Remove image</button>
        </div>
        <h2>username</h2>
        <p>The Netherlands</p>
        <ul>
            <li>
                <p>Followers</p>
                <p>0</p>
            </li>
            <li>
                <p>Following</p>
                <p>0</p>
            </li>
            <li>
                <p>Project views</p>
                <p>0</p>
            </li>
        </ul>
        <nav>
            <a href="#">Portfolio</a>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="/profile">Your challenges</a>
            <a class="active" href="#">Feedback</a>
            <a href="#">Sign out</a>
        </nav>
    </aside>
</main>

<style>



aside {
    order:-1;
}

* {
    transition:.2s;
}

a {
    color:black;
}
a.active {
    font-weight:700;
}
a:hover {
    transform:scale(1.05);
    font-weight:700;
}

main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Updated property */
    gap: 0;
    max-width: 75em;
    margin: 0 auto;
}
main aside {
    border:1px solid rgb(196, 196, 196);
    display:block;
    height:calc(100dvh - 6em);
    flex:0 1 20em;
    overflow:hidden;
}
main aside div {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:.5em;
    position:relative;
    width:11em;
    margin:0 auto;
    padding:1em;
}
aside > p {
    text-align:center;
}
aside div img {
    border-radius:50%;
    width:8em;
    height:8em;
    background:yellow;
    border:inset 2px #ffeb004f;
}
aside div button {
    position:absolute;
    bottom:0em;
    right:2em;
    height:3em;
    width:3em;
    background:yellow;
    border-radius:50%;
    border:none;
    cursor:pointer;
    color:transparent;
    box-shadow: -2px -1px 6px 0px #00000024;
}
aside h2 {
    text-align:center;

}
aside > ul {
    padding:1em;
}
aside > ul li {
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:nowrap;
}
aside nav {
    display:flex;
    flex-direction:column;
    margin-top:1em;
    border-top:1px solid  rgb(196, 196, 196);
}
aside nav a {
    height:2.5em;
    display:flex;
    align-items:center;
    margin:0 auto;
    width:100%;
    text-align:left;
    border-bottom:1px solid  rgb(196, 196, 196);
    padding-left:1em;
}

main > section {
    flex:1 1 20em;
    padding:1em;
    display:flex;
    flex-wrap:wrap;
    align-items:start;
    align-content:start;
    gap:1.5em;
}

main section > h1 {
    width:100%;
}

main section > div {
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-bottom:1em;
    gap:1em;
    width:100%;
}
main section > div button {
    padding:1em;
    border:none;
    border-bottom:.2em solid rgb(199, 199, 199);
    background:white;
}
main section > div button.active {
    border:.2em solid rgb(199, 199, 199);
    border-bottom:unset;
}

button:hover {
    font-weight:700;
    transform:scale(1.05);
    cursor:pointer;
    opacity: 1!important;
}

@media (max-width:792px) {
    aside{
        flex:1 1 100%!important;
    }
}
</style>