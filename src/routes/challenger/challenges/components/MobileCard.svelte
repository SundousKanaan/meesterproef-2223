<script lang="ts">
    import { ChallengeStatus } from '$lib/challenge';

    import Icon from '$lib/Icon.svelte';
    import Status from './Status.svelte';

    export let background: string;
</script>

<article style="background-image: url({background})">
    <div class="content">
        <div class="info">
            <span class="tag"><Icon icon="profile" /> 250</span>
            <span class="tag"><Icon icon="trend"/> 10%</span>
        </div>
        <h1>Fix XSS vulnerability</h1>
        <Status status={ChallengeStatus.OPEN} />
    </div>
    <div class="bar">
        <div class="loader">
            Handed in products: 66
            <span class="percentage">66%</span>
        </div>
        <span class="total">78 <Icon icon="document" /></span>
    </div>
</article>

<style>
    article {
        box-sizing: border-box;
        position: relative;

        border-radius: 6px;
        border: 1px solid var(--neutral-900);
        width: 100%;
        aspect-ratio: 16/9;
        padding: 21px;
        padding-bottom: 0;

        background-size: cover;
        background-position: center;
    }

    article:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgb(255, 255, 255, .5) 80%);
    }
    
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .info {
        display: flex;
        justify-content: space-between;
        height: 20px;
        margin-bottom: auto;
    }

    .info .tag {
        display: block;
        background-color: var(--neutral-300);
        padding: 12px;
    }

    h1 {
        color: var(--neutral-100);
        margin-bottom: 12px;
        font-size: 2em;
    }

    .bar {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
        width: calc(100% + 42px);
        left: -21px;
        background: var(--neutral-100);
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;

        margin-top: 21px;
    }

    .bar .loader {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        width: 66%;
        padding: 0 12px;
        background-color: var(--primary-300);
    
        overflow: hidden;
    }

    .bar .loader .percentage {
        margin-left: auto;
    }
</style>