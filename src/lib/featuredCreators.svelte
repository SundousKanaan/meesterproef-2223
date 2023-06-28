<script>
    let users = [
        { name: 'Pieter', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'The Netherlands' },
        { name: 'Jan', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'The Netherlands' },
        { name: 'Sophie', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'Belgium' },
        { name: 'Liam', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'Germany' },
        { name: 'Emma', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'France' },
        { name: 'Noah', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'Spain' },
        { name: 'Olivia', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'Portugal' },
        { name: 'Ava', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'Italy' },
        { name: 'Isabella', banner: 'https://source.unsplash.com/random/?city,night', profilePicture: 'https://source.unsplash.com/random/900%C3%97700/?person', country: 'Poland' },
    ];
</script>

<section>
    <h2>Featured creators</h2>

<ul>
    {#each users as user}
    <li>
        <a href="">
            <img src="{user.banner}" alt="">
            <h3>{user.name}</h3>
            <img class="profilePicture" src="{user.profilePicture}" alt="">
            <span class="country">{user.country}</span>
            <div>
                <span>
                    <img src="/person-244.svg" alt="">
                    <p>0</p>
                </span>
                <span>
                    <img src="/eye.svg" alt="">
                    <p>0</p>
                </span>
            </div>            
        </a>
    </li>
{/each}

</ul>
</section>


<style>
    section{
        padding-top:2em;
        max-width:75em;
        margin: 0 auto;
    }
    h2{
        margin-bottom:2em;
    }
    span{
        font-size:.8em;
    }
    img{
        width:100%;
        object-fit:cover;
    }
ul{
    display:flex;
    flex-wrap:wrap;
    gap:1em;
}
ul li{
    flex: 1 1 20em;
    position:relative;
    box-shadow: 0 0 5px 1px #dddddd;}
ul li a{
    display:flex;
    flex-direction: column;
    overflow:hidden;
    text-align: center;
    text-decoration: none;
    color:black;
    background:white;
}
ul li a > span::before{
        content:url(https://cdn-icons-png.flaticon.com/16/447/447031.png);
}
ul li a > img:first-of-type{
    width:100%;
    height:8em;
    order:-2;
}
ul li a > img:last-of-type{
    position:relative;
    top:-3em;
    margin:0 auto;
    width:6em;
    height:6em;
    border-radius:50%;
    border:2px solid white;
    order:-1;
    margin-bottom:-3em;
}
ul li a div {
    margin-top:2em;
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap:4em;
    padding-bottom:1.5em;
}
ul li a div span:first-of-type img{
    height:1em;    
}
</style>