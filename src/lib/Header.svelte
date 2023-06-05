<script>
	// import { browser } from "$app/environment";
    let active = false;
    let loggedIn = false;
    // let menuShown = false;

    // let windowWidth = browser ? window.innerWidth : 0;

    // function toggleMenu() {
    //     menuShown = !menuShown;
    // }

    function logIn() {
    loggedIn = true;
    }

    function logOut() {  
        loggedIn = false;
    }

    // $: if (windowWidth > 820) menuShown = true ; else menuShown = false;
</script>

<!-- <svelte:window on:resize={() => windowWidth = window.innerWidth} /> -->

<header class={active ? 'active' : ''}>
    <a href="#"><img src="logo_tioc_yellow.svg" alt=""></a>
    <!-- {#if menuShown} -->
    <!-- A button with the class to hide the navigation. it must be readable for people with screenreaders by using aria-->
    <button class="menu-hider" aria-label="hide navigation"></button>
    <nav>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <p>Learn</p>
                <div>
                    <a href="#">Articles</a>
                </div>
            </li>
            <li>
                <p>Discover</p>
                <div>
                    <a href="#">Creatives</a>
                    <a href="#">Inspiration</a>
                </div>
            </li>
            <li>
                <p>Grow</p>
                <div>
                    <a href="#">Challenges</a>
                    <a href="#">Workshops</a>
                </div>
            </li>
            <li>
                <p>About TIOC</p>
                <div>
                    <a href="#">What we do</a>
                    <a href="#">Team TIOC</a>
                    <a href="#">Partners</a>
                    <a href="#">Sponsors</a>
                    <a href="#">Contact</a>
                </div>
                </li>
                <li>
                    <p>Register</p>
                    <div>
                        <a href="#">Why join?</a>
                        <a href="#">FAQ</a>
                    </div>
                </li>
                <!-- {#if loggedIn} -->
                <li>
                    <img src="" alt="" class="avatar">
                    <p>Naam hier</p>
                    <div>
                        <ul>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">My profile</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#" on:click={logOut}>Sign out</a></li> <!-- add on:click event -->
                        </ul>
                    </div>
                </li>
            <!-- {:else} -->
                <li>
                    <p>Welkom gebruiker</p>
                    <div>
                        <ul>
                            <li><a href="#" on:click|preventDefault={logIn}>Log in</a></li>
                            <li><a href="#">Registreer</a></li>
                        </ul>
                    </div>
                </li>
            <!-- {/if} -->
        </ul>
    </nav>
    <!-- {/if} -->
    <button on:click={() => active = !active}>menu</button>
    </header>

<style>
    header {
    display: flex;
    justify-content: space-between;
    background: black;
    align-items: center;
    min-height: 5em;
    padding: 0 1em;
}

header button{
    display:none;
}

header nav>ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
    flex-wrap: wrap;
}

header nav ul p,
header a {
    color: white;
}

header nav ul li>div {
    display: none;
}

header nav>ul>li {
    display: flex;
    position: relative;
    height: 5em;
    align-items: center;
    gap: .5em;
}

header nav ul li:hover>div,
header nav ul li:hover>div:hover {
    display: flex;
    top: 4em;
    left: 0;
    position: absolute;
    background: currentColor;
    padding: 1em;
    gap: 1em;
    flex-direction: column;
    width: max-content;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, .25);
}

header nav ul p:hover,
header a:hover {
    color: yellow;
}

header nav ul>li>div>ul {
    display: flex;
    flex-direction: column;
    width: 100%;
}

header nav ul>li>div>ul>li {
    height: 2em;
    display: flex;
    align-items: center;
    width: 100%;
}

header nav ul>li>div>ul>li>a {
    width: 100%;
}

header nav>ul>li img {
    width: 2em;
    height: 2em;
    border-radius: 15em;
    background: yellow;
}

header a img {
    /* width: 2em; */
    height: 2em;
}

header a img {
    /* width: 2em; */
    height: 2em;
}

.menu-hider {
    all: unset;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: rgb(0 0 0 /.5);
    display:none;
    backdrop-filter: blur(.1em);
}

@media (max-width:820px) {
    header nav {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 15em;
        background: black;
        padding: 1em;
        border-left:.2em solid yellow;
    }

    header nav ul {
        display: flex;
        gap: 0em;
        flex-direction: column;
        height: 100%;
    }

    header nav ul li {
        width: 100%;
        height: 3em;
    }

    header nav ul li a,
    header nav ul li p {
        width: 100%;
        text-align: center;
        color: #fff;
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header nav ul li:last-of-type {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        height: unset;
        margin-top: auto;
        background: white;
        padding: 1em;
        border-radius: .5em;
    }

    header nav ul li:last-of-type>div {
        display: flex;
        flex: 0 0 100%;
    }

    header nav ul li:last-of-type p {
        all: unset;
        text-align: center;
        display: inline-block;
        flex: 1 1 6em;
        margin-left: -2em;
    }

    header nav>ul>li img {
        flex: 0 0 2em;
    }

    header nav ul>li>div>ul>li a {
        color: black;
        text-align: center;
    }

    header nav ul>li>div>ul>li>a {
        position: relative;
    }

    header nav>ul>li:first-of-type {
        border-radius: .5em .5em 0 0;
    }

    header nav>ul>li:nth-of-type(6) {
        border-radius: 0 0 .5em .5em;
    }

    .menu-button {
      display: block;
    }
    .menu-hider {
      display: flex;
    }
}
</style>