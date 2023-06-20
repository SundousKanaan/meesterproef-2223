<script>

</script>

<main>
    <aside>
        <div>
            <img src="" alt="">
            <button>Remove image</button> <!-- Remove image uitwerken -->
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
            <a class="active" href="/profile">Your challenges</a>
            <a href="#">Sign out</a>
        </nav>
    </aside>
    <section>
        <h1>Your challenges</h1>
        <p>View and update the current challenges you signed up for</p>
        <div>
            <button class="active">
                Active challenges
            </button><button>
                Finished challenges
            </button><button>
                Signed up
            </button>
        </div>
        <article>
            <figure>
                <img src="https://images.pexels.com/photos/13730872/pexels-photo-13730872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <figcaption>
                    <div>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <p>25 people already uploaded their work</p>
                    </div>
                </figcaption>
            </figure>
            <div>
                <h2>Web development</h2>
                <p>Within the AUAS program, people are only expected to create a safe online environment. Some people don't know what XXS vulnerability is. That's why this challenge has been added for people who need to make their applications more secure.</p>
                <p>tijdlijn</p>
                <div>
                    <button>Add your journey</button>
                    <span>or</span>
                <button>Miss your chance of winning</button>
                </div>
                <h3>UAUS</h3>
            </div>
        </article>
        <article>
            <figure>
                <img src="https://images.pexels.com/photos/13730872/pexels-photo-13730872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <figcaption>
                    <div>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <p>25 people already uploaded their work</p>
                    </div>
                </figcaption>
            </figure>
            <div>
                <h2>Web development</h2>
                <p>Within the AUAS program, people are only expected to create a safe online environment. Some people don't know what XXS vulnerability is. That's why this challenge has been added for people who need to make their applications more secure.</p>
                <p>tijdlijn</p>
                <div>
                    <button>Add your journey</button>
                    <span>or</span>
                <button>Miss your chance of winning</button>
                </div>
                <h3>UAUS</h3>
            </div>
        </article>             <article>
            <figure>
                <img src="https://images.pexels.com/photos/13730872/pexels-photo-13730872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <figcaption>
                    <div>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <p>25 people already uploaded their work</p>
                    </div>
                </figcaption>
            </figure>
            <div>
                <h2>Web development</h2>
                <p>Within the AUAS program, people are only expected to create a safe online environment. Some people don't know what XXS vulnerability is. That's why this challenge has been added for people who need to make their applications more secure.</p>
                <p>tijdlijn</p>
                <div>
                    <button>Add your journey</button>
                    <span>or</span>
                <button>Miss your chance of winning</button>
                </div>
                <h3>UAUS</h3>
            </div>
        </article>
        <article>
            <figure>
                <img src="https://images.pexels.com/photos/13730872/pexels-photo-13730872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <figcaption>
                    <div>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <span>
                            <img src="" alt="">
                        </span>
                        <p>25 people already uploaded their work</p>
                    </div>
                </figcaption>
            </figure>
            <div>
                <h2>Web development</h2>
                <p>Within the AUAS program, people are only expected to create a safe online environment. Some people don't know what XXS vulnerability is. That's why this challenge has been added for people who need to make their applications more secure.</p>
                <p>tijdlijn</p>
                <div>
                    <button>Add your journey</button>
                    <span>or</span>
                <button>Miss your chance of winning</button>
                </div>
                <h3>UAUS</h3>
            </div>
        </article>         
    </section>
</main>

<style>

*{
    transition:.2s;
}

a{
    color:black;
}
a.active{
    font-weight:700;
}
a:hover{
    transform:scale(1.05);
    font-weight:700;
}

main{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:0;
}
main aside{
    border:1px solid gray;
    display:block;
    height:calc(100dvh - 6em);
    flex:0 1 20em;
    overflow:hidden;
}
main aside div{
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
aside > p{
    text-align:center;
}
aside div img{
    border-radius:50%;
    width:8em;
    height:8em;
    background:yellow;
    border:inset 2px #ffeb004f;
}
aside div button{
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
aside h2{
    text-align:center;

}
aside > ul{
    padding:1em;
}
aside > ul li{
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:nowrap;
}
aside nav{
    display:flex;
    flex-direction:column;
    margin-top:1em;
    border-top:1px solid gray;
}
aside nav a{
    height:2.5em;
    display:flex;
    align-items:center;
    margin:0 auto;
    width:100%;
    text-align:left;
    border-bottom:1px solid gray;
    padding-left:1em;
}

main > section{
    flex:1 1 20em;
    border:1px solid gray;
    padding:1em;
    display:flex;
    flex-wrap:wrap;
    align-items:start;
    align-content:start;
    gap:1.5em;
}

main section > h1{
    width:100%;
}

main section > p{
    margin-top:-1.25em;
}

main section > div{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-bottom:1em;
    gap:1em;
    width:100%;
}
main section > div button{
    padding:1em;
    border:none;
    border-bottom:.2em solid black;
    background:white;
}
main section > div button.active{
    border:.2em solid black;
    border-bottom:unset;
}

main section > article{
    margin-bottom:1em;
    flex:1 1 22em;
    display:flex;
    flex-direction: column;
    position: relative;
    box-shadow:0px 0.4px 8px rgba(0, 0, 0, 0.1);
}

main section > article > div{
    padding:1em;
    display:flex;
    flex-direction:column;
    gap:.5em;
}
main section > article figure{
    height:12em;
    background:red;
    order:-1;
    position:relative;
}
main section > article > figure > img{
    height:100%;
    width:100%;
    object-fit:cover;
}
main section > article figure figcaption{
    position:absolute;
    bottom:0;
    width:100%;
}

main section > article figure figcaption div{
    display:flex;
    height:3em;
    align-items:center;
    background:rgb(0 0 0 /.4);
    color:white;
}
main section > article figure figcaption div span{
    height:60%;
    aspect-ratio:1/1;
    border-radius:50%;
    background:yellow;
    border:inset 2px #ffeb004f;
}
main section > article figure figcaption div span:first-of-type{
    margin-left:.6em;
}
main section > article figure figcaption div span:nth-of-type(n+2){
margin-left:-.5em;
}

main section > article figure figcaption div p{
    margin-left:.5em;
    font-size:.8em;
}

.grid-container > div{
    height:12em;
    border: 1px solid black;
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
    background:yellow;
    flex:1 1 10em;
}
div > div button:last-of-type{
    background:transparent;
    opacity:.5;
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
    padding: .5em 3em;
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

@media (max-width:792px){
    aside{
        flex:1 1 100%!important;
    }
}
</style>