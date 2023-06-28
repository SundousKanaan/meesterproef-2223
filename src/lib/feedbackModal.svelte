<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import UploadedWork from './uploadedWork.svelte';
  
  export let closeModal: () => void;

  const title = 'Asics project';
  const dispatch = createEventDispatcher();
  
  function handleClose() {
    closeModal();
    dispatch('close');
  }
</script>

<div class="background">
  <section class="modal" aria-label="Invite people modal">
    <button class="close-button" on:click={handleClose}>
      <img src="/icon_close_black.svg" alt="Close modal" />
    </button>
    <h2>{title}</h2>
    <ul>
      <li>
        <img src="/man1.jpg" alt="">
      </li>
      <li>
        <div>
          <p>Beoordelaar: Bart-Jan</p>
          <span>November 15, 2022</span>
        </div>
      </li>
    </ul>

    <ul>
      <li>Visual design</li>
      <li>Interaction design</li>
      <li>Usability</li>
    </ul>

    <UploadedWork />
  </section>
</div>

<style>
    :root {
        --cta-color: #21BDE5;
        --yellow: #FFEB66;
        --hover: #BAE4E8;
        --white: #FFFFFF;
        --black: #000000;
    }

    button {
      position: absolute;
      right: 1rem;
      top: 1rem;
      background-color: transparent;
      border: none;
      width: 2em;
      height: 2em;
      cursor: pointer;
      box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,.1);
    }

    button img {
      width: 1em;
      height: 1em;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: #000000c3;
        z-index: 5;
    }

    .modal {
        position: fixed;
        overflow-y: scroll;
        left: 0;
        right: 0;
        top: calc(100dvh - 95%);
        margin: 0 auto;
        width: 70%;
        border-radius: 0.5rem;
        height: 100%;
        box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,.1);
        background-color: var(--white);
        z-index: 5;
    }
    
    .modal > ul:first-of-type {
      display: flex;
      background-color: #f9f9f9;
      padding: 1rem;
      gap: 1rem;
      margin-left: 1rem;
      border-bottom: .1rem solid #e5e5e5;
      border-top: .1rem solid #e5e5e5;
    }

    .modal > ul:first-of-type li {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal > ul:first-of-type li img {
      width: 4rem;
      border-radius: 100%;
    }

    .modal > ul:first-of-type li div p {
      font-weight: bold;
    }

    .modal > ul:first-of-type li div span {
      font-size: 0.9rem;
    }

    .modal > ul:last-of-type {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      margin: 1rem;
      margin-bottom: 0;
    }

    .modal > ul:last-of-type li {
      color: #fff;
      font-size: .8rem;
      padding: .25rem .5rem;
      background-color: #2f84b9;
      border-radius: .5rem;
    }

    .modal h2:first-of-type {
        display: flex;
        align-items: center;
        margin-left: .8rem;
        margin: 1rem;
    }

    @media (max-width: 60rem) { 
        .modal {
            width: 80%;
            max-width: 35rem;
        }
    }
</style>