<script>
    let active = false;
    let loggedIn = false;
    /**
	 * @type {string | null}
	 */
    let openItem = null; 

    function logIn() {
        loggedIn = true;
    }

    function logOut() {  
        loggedIn = false;
    }

    /**
	 * @param {string | null} id
	 */
    function toggleOpen(id) {
        openItem = openItem === id ? null : id;
    }
</script>


<!-- <svelte:window on:resize={() => windowWidth = window.innerWidth} /> -->

<header class={active ? 'active' : ''}>
    <a href="../../../"><img src="logo_tioc_yellow.svg" alt=""></a>
    <!-- {#if menuShown} -->
    <!-- A button with the class to hide the navigation. it must be readable for people with screenreaders by using aria-->
    <button class="menu-hider" aria-label="hide navigation" on:click={() => active = !active}></button>
    <nav>
        <ul>
            <li class={openItem === 'item1' ? 'open' : ''} on:click={() => toggleOpen('item1')}>
                <a href="../../../">Home</a>
            </li>
            <li class={openItem === 'item2' ? 'open' : ''} on:click={() => toggleOpen('item2')}>
                <p>Learn</p>
                <div>
                    <a href="#">Articles</a>
                </div>
            </li>
            <li class={openItem === 'item3' ? 'open' : ''} on:click={() => toggleOpen('item3')}>
                <p>Discover</p>
                <div>
                    <a href="#">Creatives</a>
                    <a href="#">Inspiration</a>
                </div>
            </li>
            <li class={openItem === 'item4' ? 'open' : ''} on:click={() => toggleOpen('item4')}>
                <p>Grow</p>
                <div>
                    <a href="/overview">Challenges</a>
                    <a href="#">Workshops</a>
                </div>
            </li>
            <li class={openItem === 'item5' ? 'open' : ''} on:click={() => toggleOpen('item5')}>
                <p>About TIOC</p>
                <div>
                    <a href="#">What we do</a>
                    <a href="#">Team TIOC</a>
                    <a href="#">Partners</a>
                    <a href="#">Sponsors</a>
                    <a href="#">Contact</a>
                </div>
                </li>
                <li class={openItem === 'item6' ? 'open' : ''} on:click={() => toggleOpen('item6')}>
                    <p>Register</p>
                    <div>
                        <a href="#">Why join?</a>
                        <a href="#">FAQ</a>
                    </div>
                </li>
                {#if loggedIn}
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
            {:else}
                <li>
                    <p>Welkom gebruiker</p>
                    <div>
                        <ul>
                            <li><a href="#" on:click|preventDefault={logIn}>Log in</a></li>
                            <li><a href="#">Registreer</a></li>
                        </ul>
                    </div>
                </li>
            {/if}
        </ul>
    </nav>
    <!-- {/if} -->
    <button class="menu-button" on:click={() => active = !active}>
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff">

            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            
            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#fff"/> </g>
            
            </svg>
        </button>
    </header>

<style>
    header {
    display: flex;
    justify-content: space-between;
    background: black;
    align-items: center;
    min-height: 5em;
    padding: 0 1em;
    position: relative;
    z-index: 4;
}

header button.menu-hider{
    display:none;
}

.menu-button{
    display:none
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
    cursor:pointer;
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

@media (max-width:866px) {
    header nav{
        display:none;
    }

    .menu-button{
        display: flex;
    }
    header.active nav {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 15em;
        background: black;
        padding: 1em;
        display:flex;
        border-left:.2em solid yellow;
        flex-direction: row;
    }

    header.active > nav > ul{
        flex-direction: row!important;;
    }

    header.active > nav > ul {
        display: flex;
        gap: 0em;
        flex-direction: column;
        height: 100%;
        overflow-y:scroll;
    }

    header.active > nav > ul::-webkit-scrollbar{
        display:none;
    }

    header.active nav ul li {
        width: 100%;
        height:unset;
        min-height:3em;
    }

    header.active nav > ul > li > a,
    header.active nav > ul > li > p {
        width: 100%;
        text-align: center;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header.active nav ul li:last-of-type {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        margin-top: auto;
        background: white;
        padding: 1em;
        border-radius: .5em;
    }

    header.active nav ul li:last-of-type>div {
        display: flex;
        flex: 0 0 100%;
    }

    header.active nav ul li:last-of-type>div {
        overflow:unset;
    }

    header.active nav ul li:last-of-type p {
        all: unset;
        text-align: center;
        display: inline-block;
        flex: 1 1 6em;
        margin-left: -2em;
    }

    header.active nav>ul>li img {
        flex: 0 0 2em;
    }

    header.active nav ul>li>div>ul>li a {
        color: black;
        text-align: center;
    }

    header.active nav ul>li>div>ul>li>a {
        position: relative;
    }

    header.active nav>ul>li:first-of-type {
        border-radius: .5em .5em 0 0;
    }

    header.active nav>ul>li:nth-of-type(6) {
        border-radius: 0 0 .5em .5em;
    }

    .menu-button {
      display: block;
    }
    header.active .menu-hider {
      display: flex;
    }
    li.open {
    display: flex;
    position: relative;
    flex-wrap:wrap;
    background:white;
    border-radius: .2em;
    padding:1em;
    overflow:hidden;
}

nav > ul > li::after{
    content:'^';
    position:absolute;
    top: 1em;
    right:1em;
    transform:rotate(180deg);
    color:black;
}
li.open div{
    display:flex;
    flex-wrap:wrap;
    width:100%;
}
li.open div a{
    width:100%;
    text-align:center;
    padding-top:.5em;
}

li.open div a:first-of-type{
    border-top:.1em solid black;
}

li.open > p, li.open a{
    color:black!important;
}
}

@media screen and (min-width:866px){
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

header nav ul p:hover, header a:hover {
    color: yellow;
}
}
</style>