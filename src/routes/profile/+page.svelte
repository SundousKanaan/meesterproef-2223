<svelte:head>
    <title>Your challenges</title> 
</svelte:head>

<script lang="ts">
    import Article from '$lib/Article.svelte';
    let selectedState = 'active'; // Default to showing active challenges

    function selectState(state: string) {
        selectedState = state;
    }

    let challenges = [
        {
            imgSrc: 'https://images.pexels.com/photos/13730872/pexels-photo-13730872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            peopleCount: 25,
            title: 'Web development',
            description: 'Within the AUAS program, people are only expected to create a safe online environment. Some people don\'t know what XXS vulnerability is. That\'s why this challenge has been added for people who need to make their applications more secure.',
            timeline: 'May 1, 2023 - June 30, 2023',
            organization: 'UAUS',
            state:'active',
            userState:'uploaded'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg',
            peopleCount: 30,
            title: 'Graphic design',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'June 1, 2023 - July 31, 2023',
            organization: 'DesignCo',
            state:'active',
            userState:'waiting'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
            peopleCount: 15,
            title: 'Mobile App Development',
            description: 'The challenge is to build a mobile app that helps users manage their time and tasks more effectively. We are looking for unique and user-friendly solutions.',
            timeline: 'July 1, 2023 - August 31, 2023',
            organization: 'AppDev',
            state:'signed up',
            userState:'Challenge has not started yet'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg',
            peopleCount: 20,
            title: 'Data Science',
            description: 'The challenge is to use our provided dataset to build a machine learning model that can predict customer churn. We are looking for accurate and efficient solutions.',
            timeline: 'August 1, 2023 - September 30, 2023',
            organization: 'DataInc',
            state:'finished',
            userState:'finished'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg',
            peopleCount: 40,
            title: 'Cybersecurity',
            description: 'Challenge is to build a secure network system to withstand potential cyber attacks. We value innovative solutions with a focus on protection and detection.',
            timeline: 'September 1, 2023 - October 31, 2023',
            organization: 'SecureNet',
            state:'active',
            userState:'uploaded'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/2768878/pexels-photo-2768878.jpeg',
            peopleCount: 35,
            title: 'Game Development',
            description: 'Develop a fun and engaging mobile game with interesting mechanics. We value creativity and engagement in gameplay.',
            timeline: 'October 1, 2023 - November 30, 2023',
            organization: 'GameDev',
            state:'signed up',
            userState:'Challenge has not started yet'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg',
            peopleCount: 30,
            title: 'AI and Robotics',
            description: 'Design an AI system for a robot that can navigate a predefined maze. The goal is to reach the end of the maze as quickly as possible.',
            timeline: 'November 1, 2023 - December 31, 2023',
            organization: 'RoboticsLab',
            state:'active',
            userState:'waiting'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
            peopleCount: 50,
            title: 'IoT Application',
            description: 'Design and develop an IoT application to control smart home devices. The application should be user-friendly and secure.',
            timeline: 'December 1, 2023 - January 31, 2024',
            organization: 'SmartHome',
            state:'active',
            userState:'waiting'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/929245/pexels-photo-929245.jpeg',
            peopleCount: 45,
            title: 'Digital Marketing',
            description: 'Create a digital marketing campaign for a new product. The campaign should effectively utilize multiple platforms and engage with the target audience.',
            timeline: 'January 1, 2024 - February 28, 2024',
            organization: 'MarketingInc',
            state:'signed up',
            userState:'Challenge has not started yet'

        },
        {
            imgSrc: 'https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg',
            peopleCount: 40,
            title: 'VR Application',
            description: 'Design and develop a VR application for educational purposes. The application should be interactive and engaging for users.',
            timeline: 'February 1, 2024 - March 31, 2024',
            organization: 'VRLearn',
            state:'active',
            userState:'uploaded'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg',
            peopleCount: 30,
            title: 'Healthcare Tech',
            description: 'Create a solution that uses technology to improve patient care in hospitals. We value solutions that are user-friendly, secure, and efficient.',
            timeline: 'March 1, 2024 - April 30, 2024',
            organization: 'HealthTech',
            state:'finished',
            userState:'finished'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/1000324/pexels-photo-1000324.jpeg',
            peopleCount: 25,
            title: 'Fintech Innovation',
            description: 'Design a solution to make online banking more secure and user-friendly. Innovative and practical solutions will be highly valued.',
            timeline: 'April 1, 2024 - May 31, 2024',
            organization: 'FinServe',
            state:'finished',
            userState:'finished'
        }];

    $: filteredChallenges = challenges.filter(challenge => challenge.state === selectedState);
    
    let currentUser = {
        name: 'John Doe',
        profilePicture: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
        country:'The Netherlands'}
</script>

<main>
    <section>
        <h1>Your challenges</h1>
        <p>View and update the current challenges you signed up for</p>
        <div>
            <button class:selected={selectedState === 'active'} on:click={() => selectState('active')}>
                Active challenges
            </button>
            <button class:selected={selectedState === 'finished'} on:click={() => selectState('finished')}>
                Finished challenges
            </button>
            <button class:selected={selectedState === 'signed up'} on:click={() => selectState('signed up')}>
                Signed up
            </button>
        </div>
        {#each filteredChallenges as challenge (challenge.title)}
        <Article 
            imgSrc={challenge.imgSrc}
            peopleCount={challenge.peopleCount} 
            title={challenge.title} 
            description={challenge.description} 
            timeline={challenge.timeline} 
            organization={challenge.organization}
            state={challenge.state}
            userState={challenge.userState}
        />
    {/each}
    </section>
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
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a class="active" href="/profile">Your challenges</a>
            <a href="#">Sign out</a>
        </nav>
    </aside>
</main>

<style>

aside{
    order:-1;
}

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
    max-width:75em;
    margin:0 auto;
    background:white;
    padding:unset;
}
main aside{
    border:1px solid rgb(196, 196, 196);
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
    background:var(--theme-color);
    border:inset 2px #ffeb004f;
    object-fit:cover;
}
aside div button{
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
    border-top:1px solid  rgb(196, 196, 196);
}
aside nav a{
    height:2.5em;
    display:flex;
    align-items:center;
    margin:0 auto;
    width:100%;
    text-align:left;
    border-bottom:1px solid  rgb(196, 196, 196);
    padding-left:1em;
}

main > section{
    flex:1 1 20em;
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
    border-bottom:.2em solid rgb(199, 199, 199);
    background:white;
}
main section > div button.selected{
    border:.2em solid rgb(199, 199, 199);
    border-bottom:unset;
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
@media (max-width:793px){
    main section h1 {
    position: sticky;
    top: 0;
    z-index: 2;
    background: white;
    padding:1em 0;
}
header{
    position:sticky;
    top:0;
    z-index:2;
    background:white;
    padding:1em 0;
}
}
</style>