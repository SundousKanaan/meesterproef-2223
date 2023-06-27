
<script>
    const data = [
      {image: "/shoe.webp", challenge: "Schoen tekenen", creator: "John", link: "/challenges/schoen-tekenen"},
      {image: "/eye.png", challenge: "Ogen tekenen", creator: "Jane", link: "/challenges/ogen-tekenen"},
      {image: "/beans.png", challenge: "Bonen tekenen", creator: "Joan", link: "/challenges/bonen-tekenen"},
      {image: "/shoe.webp", challenge: "Schoen schilderen", creator: "James", link: "/challenges/schoen-schilderen"},
      {image: "/eye.png", challenge: "Ogen schetsen", creator: "Jill", link: "/challenges/ogen-schetsen"},
      {image: "/beans.png", challenge: "Bonen beeldhouwen", creator: "Jerry", link: "/challenges/bonen-beeldhouwen"},
    ];
  </script>

<section>
    <h2>Featured work</h2>
    <ul>
        {#each data as item}
        <li>
            <a href={item.link}>
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

<style>
    h2{
        margin:1em 0;
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        transition:.5s;
    }
    section {
        max-width: 75em;
    }

    section ul{
        display:flex;
        flex-wrap:wrap;
        flex-direction: row;
        gap:1em;
    }

    section ul li{
        flex:1 1 20em;
        overflow:hidden;
        position:relative;
        box-shadow:0px 0.4000000059604645px 8px 0px rgb(0 0 0 / 15%)
    }

    section ul li:hover img{
        transform:scale(1.05);
        filter:contrast(1.2) brightness(1.05);
    }

    section ul li::before{
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

    section ul li a{
        height:12em;
        position:relative;
    }
    h3,p{
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

    </style>