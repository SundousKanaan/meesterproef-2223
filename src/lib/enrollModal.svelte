<script lang="ts">
    export let showEnrollModal: boolean;
    export let closeModal: () => void;
</script>
  
{#if showEnrollModal}
    <div class="background">
        <section class="modal" aria-label="Invite people modal">
            <div class="modal-header">
                <h1>You succesfully enrolled!</h1>
                <span class="close" role="button" aria-label="Close modal" on:click={closeModal}>&times;</span>
            </div>
        </section>
    </div>
{/if}

<style>
    :root {
        --cta-color: #21BDE5;
        --yellow: #FFEB66;
        --hover: #BAE4E8;
        --white: #FFFFFF;
        --black: #000000;
    }

    .background {
        position: fixed;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: #000000c3;
        z-index: 5;
    }

    .modal {
        position: fixed;
        display: flex;
        justify-content: center;
        flex-direction: column;
        left: 0;
        right: 0;
        top: calc(100dvh - 65%);
        margin: 0 auto;
        width: 35em;
        height: calc(40dvh - 20%);
        box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,.1);
        background-color: var(--white);
        z-index: 5;
    }

    .modal .modal-header {
        display: flex;
        justify-content: space-between;
    }

    .modal .modal-header h1 {
        display: flex;
        align-items: center;
        margin-left: .8em;
    }

    .modal .modal-header span {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: .4em;
        font-size: 3em;
        color: var(--black);
        cursor: pointer;
        z-index: inherit;
    }

    @media (max-width: 60em) { 
        .modal {
            width: 80%;
            max-width: 35em;
        }
    }
</style>