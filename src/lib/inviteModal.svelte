<script>
  export let showInviteModal = false;

  import { createEventDispatcher } from 'svelte';

  export let closeModal;

  const dispatch = createEventDispatcher();
  let inputValue = '';
  let submittedValues = [];

  function handleSubmit() {
    submittedValues = [...submittedValues, inputValue];
    inputValue = '';
    dispatch('detail', submittedValues);
  }

  function removeItem(index) {
    submittedValues = submittedValues.filter((_, i) => i !== index);
  }
</script>


{#if showInviteModal}
  <div class="background">
    <section class="modal" aria-label="Invite people modal">
      <div class="modal-header">
        <h1>Invite people</h1>
        <span class="close" role="button" aria-label="Close modal" on:click={closeModal}>&times;</span>
      </div>
      <div class="modal-content">
        <form>
          <div>
            <input name="email" type="email" bind:value={inputValue} required/>
            <label for="email">Email</label>
            <button on:click={handleSubmit}>Invite</button>
          </div>
        </form>
  
        <ul>
          {#each submittedValues as value, index}
          <li>
            <img src="/man3.jpg" alt="" />
            {value}
            <a href="#" on:click={() => removeItem(index)}>Remove</a>
          </li>
          {/each}
        </ul>
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
        top: calc(100dvh - 80%);
        margin: 0 auto;
        width: 35em;
        height: calc(80dvh - 20%);
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
        margin-right: .4em;
        font-size: 3em;
        color: var(--black);
        cursor: pointer;
        z-index: inherit;
    }

    .modal .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 80%;
        height: 100%;
        padding: 1em;
    }

    .modal .modal-content form {
        width: 100%;
    }

    .modal .modal-content form div {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: .5em;
    }

    .modal .modal-content form div label {
        position: absolute;
        top: 1.5rem;
        left: 1.5em;
        color: #b3b3b3;
        font-size: 1rem;
        transition: all .3s ease-in-out;
    }

    .modal .modal-content form div button {
        border: none;
        background-color: var(--yellow);
        box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,.1);
        color: var(--black);
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }

    .modal .modal-content form div button:hover {
        background-color: #fcdc06;
    }

    .modal .modal-content form div input[type="email"]:focus + label {
        color: var(--black);
        top: -.6rem;
        left: 1em;
    }

    .modal .modal-content form div input[type="email"]:required:valid:not(:placeholder-shown) + label {
        color: var(--black);
        top: -.6rem;
        left: 1em;
    }

    .modal .modal-content input[type="email"] {
        border: none;
        padding-left: 1em;
        box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,.1);
        width: 100%;
        height: 3em;
    }

    .modal .modal-content ul {
        overflow-y: scroll;
        max-height: 45dvh;
    }

    .modal .modal-content ul li {
        display: grid;
        margin-top: 1em;
        grid-template-columns: .2fr 3fr 1fr;
        gap: .3em;
        width: 100%;
    }

    .modal .modal-content ul li a {
        text-align: right;
    }

    @media (max-width: 60em) { 
        .modal {
            width: 80%;
            max-width: 35em;
        }
    }
</style>