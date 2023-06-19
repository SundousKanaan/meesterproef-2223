<section class="hero">
    <div>
        <ul class="breadcrumbs">
            <li>
                <a href="#">test</a>
            </li>
            <li>
                <a href="#">test2</a>
            </li>
            <li>
                <a href="#">test3</a>
            </li>
        </ul>
        <h1>Immersive Retail Experience</h1>
        <h2>How to create an Immersive Retail Experience for Asics shoes Europe</h2>
        <div class="button-wrapper">
            <button class="cta">Enroll</button>
            <button class="secondary-cta">Cooperative enrollment</button>
        </div>
        <div>
            <img src="https://placehold.co/600x400" alt=""/>
            <img src="https://placehold.co/600x400" alt=""/>
            <img src="https://placehold.co/600x400" alt=""/>
            <p><span>number</span> have already enrolled!</p>
        </div>
    </div>
    <div>
        <img src="/asics-logo.svg" alt=""/>
    </div>
</section>

<section class="challenge-info">
    <article>
        <h2>About the Immersive Retail Experience Challenge</h2>
    </article>
    <aside>
        <ul>
            <li>
                <div>
                    <img src="/skill.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Skill level</h3>
                    <h4>Intermediate</h4>
                </div>
            </li>

            <li>
                <div>
                    <img src="/deadline.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Deadline</h3>
                    <h4>17-07-2023</h4>
                </div>
            </li>

            <li>
                <div>
                    <img src="/price.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Price</h3>
                    <h4>Paid internship at ASICS</h4>
                </div>
            </li>
        </ul>
    </aside>
    <article>
        <h2>Skills you’ll have mastered after the challenge</h2>
        <ul>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>UX design</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Communication</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Coding</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Presenting</p>
            </li>
        </ul>
    </article>
</section>

<section class="cta-section">
    <h2>Ready to join the ultimate challenge?</h2>
    <p>Get started on building a website with XSS.</p>
    <button class="cta">enroll</button>
</section>

<section class="prizes">
    <div>
        <img src="https://placehold.co/600x400" alt=""/>
        <ul>
            <li>
                <div>
                    <img src="/medal.svg" alt=""/>
                </div>
                <div>
                    <span>First place</span>
                    <h2>Cooperate with us</h2>
                </div>
            </li>
            <li>
                <div>
                    <img src="/medal.svg" alt=""/>
                </div>
                <div>
                    <span>Second place</span>
                    <h2>Asics Air Max</h2>
                </div>
            </li>
            <li>
                <div>
                    <img src="/medal.svg" alt=""/>
                </div>
                <div>
                    <span>Third place</span>
                    <h2>Asics voucher</h2>
                </div>
            </li>
        </ul>
    </div>
</section>

<style>
    :root {
        --cta-color: #21BDE5;
        --yellow: #FFEB66;
        --hover: #BAE4E8;
        --white: #FFFFFF;
        --black: #000000;
    }

    .hero {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 70dvh;
        margin-bottom: 2em;
        background-image: url('/hero_no_content.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    span {
        font-weight: bold;
    }

    button {
        font-size: 1em;
        cursor: pointer;
        border: none;
        transition: all .2s ease-in-out;
    }

    .cta {
        width: 15em;
        color: var(--white);
        background-color: var(--cta-color);
        padding: 1em 2em 1em 2em;
    }

    .secondary-cta {
        width: 20em;
        color: var(--black);
        border: .25em solid var(--cta-color);
        padding: .8em 1.8em .8em 1.8em;
    }

    .secondary-cta:hover,
    .cta:hover {
        background-color: var(--hover);
    }

    .hero > div {
        display: flex;
        flex-direction: column;
        padding: 6em;
        padding-top: 3.5em;
        padding-bottom: 2.5em;
    }

    .hero > div:last-of-type {
        justify-content: center;
    }

    .hero > div:last-of-type img {
        width: 30em;
    }

    .hero > div h1 {
        font-size: 2.5em;
        width: 14em;
        margin-bottom: .6em;
        padding-left: 0.2em;
        color: var(--white);
        background-color: var(--black);
    }

    .hero > div h2 {
        font-size: 2em;
        width: 14em;
        margin-bottom: .6em;
        padding-left: 0.2em;
        color: var(--yellow);
        background-color: var(--black);
    }

    .hero div .breadcrumbs {
        display: flex;
        gap: 1.5em;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 1em;
    }

    .hero div .breadcrumbs li a {
        color: var(--white);
        position: relative;
    }

    .hero div .breadcrumbs li a:hover {
        color: var(--hover);
    }

    .hero div .breadcrumbs li:not(:last-of-type) a:after {
        color: var(--cta-color);
        content: ">";
        position: absolute;
        right: -1.2em;
    }

    .hero div .button-wrapper {
        display: flex;
        gap: 1em;
        margin-top: 1em;
    }

    .hero div > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1em;
        width: 100%;
    }

    .hero div > div img:nth-of-type(2) {
        transform: translate(-5px);
    }

    .hero div > div img:nth-of-type(3) {
        transform: translate(-10px);
    }

    .hero div > div img {
        border-radius: 100%;
        object-fit: cover;
        width: 22px;
        height: 22px;
    }

    .hero div > div p {
        color: var(--white);
    }

    .challenge-info {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 6em;
    }

    .challenge-info article:first-of-type {
        flex: 50%;
    }

    .challenge-info article:last-of-type {
        width: 100%;
    }

    .challenge-info article:last-of-type h2 {
        width: 14em;
    }

    .challenge-info article:last-of-type ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: .4em;
        width: 25em;
    }

    .challenge-info article:last-of-type ul li {
        display: flex;
        width: 10em;
        margin-top: 1em;
        align-items: center;
        margin-right: 2em;
    }

    .challenge-info article:last-of-type ul li img {
        width: 1.5em;
        margin-right: 1em;
    }

    .challenge-info aside {
        display: flex;
        flex: 50%;
        justify-content: center;
    }

    .challenge-info aside ul li {
        margin-bottom: .5em;
        margin-top: .5em;
        display: flex;
    }

    .challenge-info aside ul li .wrapper h3 {
        font-weight: bold;
    }

    .challenge-info aside ul li .wrapper h4 {
        font-weight: normal;
    }

    .challenge-info aside ul li > div:nth-of-type(1) {
        margin-right: .5em;
        background-image: url('/klodder.svg');
        background-repeat: no-repeat;
    }

    .cta-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        text-align: center;
        box-sizing: border-box;
        margin-top: 2em;
        padding: 2em;
        background-color: var(--yellow);
    } 
    
    .cta-section h2 {
        font-size: 2em;
    }

    .prizes {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 3em;
    }

    .prizes > div {
        display: flex;
        gap: 2em;
    }

    .prizes div ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .prizes div ul li {
        display: grid;
        grid-template-columns: .1fr 1fr;
        gap: 1em;
    }

    .prizes div ul li div:first-of-type {
        background-image: url('/klodder.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }

    .prizes div ul li div:first-of-type {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }

    .prizes div ul li div:last-of-type {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        align-self: center;
    }

    .prizes div ul li:nth-of-type(1) div img {
        width: 7em;
    }

    .prizes div ul li:nth-of-type(2) div img {
        width: 6em;
    }

    .prizes div ul li:nth-of-type(3) div img {
        width: 5em;
    }
</style>