<svelte:head>
    <title>Your Something</title>
</svelte:head>

<script>
    import InviteModal from '$lib/inviteModal.svelte';

    let showInviteModal = false;

    function closeModal() {
        showInviteModal = false;
    }
</script>

<main>

    <button on:click={() => showInviteModal = true}>Open Invite Modal</button>

    <InviteModal {showInviteModal} {closeModal} />
</main>