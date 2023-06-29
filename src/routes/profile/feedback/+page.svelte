<svelte:head>
    <title>Your Feedback</title> 
</svelte:head>

<script lang="ts">
    import Modal from '$lib/feedbackModal.svelte';
  
    interface Challenge {
      image: string;
      challenge: string;
      creator: string;
      link: string;
    }
  
    const data: Challenge[] = [
      { image: "/shoe.webp", challenge: "Schoen tekenen", creator: "John", link: "/challenges/schoen-tekenen" },
      { image: "/eye.png", challenge: "Ogen tekenen", creator: "Jane", link: "/challenges/ogen-tekenen" },
      { image: "/beans.png", challenge: "Bonen tekenen", creator: "Joan", link: "/challenges/bonen-tekenen" },
    ];
  
    let showModal = false;
  
    function closeModal() {
      showModal = false;
    }
  
    function openFeedbackModal() {
      showModal = true;
    }

    let currentUser = {
        name: 'John Doe',
        profilePicture: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
        country:'The Netherlands'}

  </script>
  
  <main>
    <section>
      <h1>Feedback</h1>
      <p>Here you'll see the submissions you got feedback on.</p>
      <ul>
        {#each data as item (item.link)}
        <li>
          <a href="#" on:click={() => openFeedbackModal()}>
            <img src={item.image} alt={item.challenge} />
            <div>
              <h3>{item.challenge}</h3>
              <p>by {item.creator}</p>
            </div>
          </a>
        </li>
        {/each}
      </ul>
    </section>
  
    {#if showModal}
      <Modal {closeModal} />
    {/if}

    <aside>
        <div>
            <img src={currentUser.profilePicture} alt="">
            <button>Remove image</button> 
        </div>
        <h2>{currentUser.name}</h2>
        <p>{currentUser.country}</p>
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
            <a href="/profile">Profile</a>
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
    /* transform:scale(1.05); */
    font-weight:700;
}

main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0;
    max-width: 75em;
    margin: 0 auto;
}

main aside {
    border:1px solid rgb(196, 196, 196);
    display:block;
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
    background:var(--theme-color);
    border:inset 2px #ffeb004f;
}

aside div button {
    position:absolute;
    bottom:0em;
    right:2em;
    height:3em;
    width:3em;
    background:var(--theme-color);
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
    display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    align-items:start;
    align-content:start;
    flex:1 1 20em;
    padding:1em;
    gap:1.5em;
    border: 1px solid rgb(196, 196, 196);
    border-left: unset;
}

main section > div button {
    padding:1em;
    border:none;
    border-bottom:.2em solid rgb(199, 199, 199);
    background:white;
}

button:hover {
    font-weight:700;
    transform:scale(1.05);
    cursor:pointer;
    opacity: 1!important;
}

h2 {
    margin:1em 0;
}

img {
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.5s;
}

section {
    max-width: 75em;
}

section ul {
    display:flex;
    flex-wrap:wrap;
    flex-direction: row;
    gap:1em;
}

section ul li {
    flex:1 1 10em;
    overflow:hidden;
    position:relative;
    box-shadow:0px 0.4000000059604645px 8px 0px rgb(0 0 0 / 15%)
}

section ul li:hover img {
    transform:scale(1.05);
    filter:contrast(1.2) brightness(1.05);
}

section ul li::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 40%;
    width: 100%;
    background: linear-gradient(0deg, #000000e0, transparent);
    z-index: 1;
    pointer-events: none;
}

section ul li a {
    height:12em;
    position:relative;
}

section ul p,
section h3 {
    color:white;
    z-index:4;    
    text-shadow:0 0 black;    
}

section ul li a div{
    position:absolute;
    bottom:1em;
    left:1em;
    width:90%;
    margin:0 auto;
    z-index:4;
}

@media (max-width:792px) {
    aside{
        flex:1 1 100%!important;
    }
}
</style>