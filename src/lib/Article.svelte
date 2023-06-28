<script lang="ts">
    export let imgSrc: string;
    export let peopleCount:string;
    export let title:string;
    export let description:string;
    export let timeline:string;
    export let organization:string;
    export let state: string; // active, finished, signed up
    export let userState:string;
</script>

<article>
    <figure>
        <img src={imgSrc} alt="" loading="lazy">
        <figcaption>
            <div>
                <span>
                    <img src="" alt="" loading="lazy">
                </span>
                <span>
                    <img src="" alt="" loading="lazy">
                </span>
                <span>
                    <img src="" alt="" loading="lazy">
                </span>
                <p>{peopleCount} people already uploaded their work</p>
            </div>
        </figcaption>
    </figure>
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{timeline}</p>
        <div>
            {#if state === 'active'}
                {#if userState.toLowerCase() === 'uploaded'}
                    <button>Add more</button>
                {:else}
                    <button>Add your journey</button>
                {/if}
                <span>or</span>
                <button>Miss your chance of winning</button>
            {:else if state === 'finished'}
                <button class="viewResult">View Results</button>
            {:else if state === 'signed up'}
                <button class="cancel">Cancel Sign Up</button>
            {/if}
        </div>
        <h3>{organization}</h3>
    </div>
    <p class="simple">{userState}</p>
</article>

<style>
   article{
    margin-bottom:1em;
    flex:1 1 30%;
    display:flex;
    flex-direction: column;
    position: relative;
    box-shadow:0px 0.4px 8px rgba(0, 0, 0, 0.1);
    overflow:hidden;
    height:38em;
    min-width:14em;
}

article span{
    display:none;
}

article:after{
content:'';
position:absolute;
top:-42em;
right:-6em;
height:250%;
width:3%;
background:rgba(255,255,255,.5);
backdrop-filter:blur(1px);
transform:rotate3d(0,0,1,135deg);
transition:0s;
}

article:hover:after{
    transform:translate(-35em,35em) rotate3d(0,0,1,135deg);
    transition:1s;
}

article > div{
    padding:1em;
    display:flex;
    flex-direction:column;
    gap:.5em;
    justify-content: space-between;
    height:100%;
}

article > div > p:first-of-type{
    margin-bottom:auto;
    margin-bottom: auto;
    height: 8em;
    overflow: hidden;
}
article > div > p:last-of-type{
    margin-top:auto;
}
article figure{
    height:10em;
    background:red;
    order:-1;
    position:relative;
}
article > figure > img{
    height:100%;
    width:100%;
    object-fit:cover;
    height:10em;
}
article figure figcaption{
    position:absolute;
    bottom:0;
    width:100%;
}

article figure figcaption div{
    display:flex;
    height:3em;
    align-items:center;
    background:rgb(0 0 0 /.4);
    color:white;
}
article figure figcaption div span{
    height:60%;
    aspect-ratio:1/1;
    border-radius:50%;
    background:var(--theme-color);
    border:inset 2px #ffeb004f;
}
article figure figcaption div span:first-of-type{
    margin-left:.6em;
}
article figure figcaption div span:nth-of-type(n+2){
margin-left:-.5em;
}

article figure figcaption div p{
    margin-left:.5em;
    font-size:.8em;
}

.grid-container > div{
    height:12em;
    border: 1px solid rgb(199, 199, 199);
    background:red;
}

div > div{
    display:flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:.5em;
}

div > div button{
    height:4em;
    padding:0 1em;
    border:none;
    background:var(--theme-color);
    flex:1 1 10em;
}
div > div button:last-of-type{
    background:transparent;
    opacity:.5;
    transition:.1s;
}
div > div button:last-of-type:hover{
    position:relative;
    color: white;
}
div > div button:last-of-type:hover::after{
    content:"Stop with the challenge";
    transition:0s;
    position:absolute;
    transition:0s;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:grid;
    place-content: center;
    color:red;
    border:.1em inset red;
    transform:scale(0.95);
}

div div span{
    position:relative;
}
div div span::before, div div span::after{
    position:absolute;
    height:40%;
    width:.1em;
    top:0;
    left:.25em;
    content:"|";    
}
div div span::before{
    top:-1em;
}
div div span::after{
    top:1em;
}
h3{
    position:absolute;
    top:1em;
    right:1em;
    padding: .5em;
    background:white;
    font-size:1em;
    color:#6E98FF;
}

button:hover{
    font-weight:700;
    transform:scale(1.05);
    cursor:pointer;
    opacity: 1!important;
}

.simple{
    width: 100%;
    background: var(--theme-secondary);
    color: white;
    padding: .2em 1em;
    text-align: center;
    position: absolute;
    top: 1.05em;
    left: -8.05em;
    z-index: 0;
    transform: rotate(320deg);
    font-size: .7em;
}
div:last-of-type > button.viewResult:hover::after, div:last-of-type > button.cancel:hover::after{
    content:unset;
}

div:last-of-type > button.viewResult, div:last-of-type > button.cancel{
    opacity:unset;
    background:var(--theme-color);
}

@media (max-width:504px){
   .simple{
    all: unset;
    top: 1em;
    left: 1em;
    position: absolute;
    background: var(--theme-color-secondary);
    padding: .4em 1em;
    }
}

</style>