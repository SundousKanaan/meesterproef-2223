<script>
	import DragenDroppUploadProces from '$lib/DragenDroppUploadProces.svelte';

	let showInviteModal = false;

	function openInviteModal() {
		showInviteModal = true;
	}

	import InviteModal from '$lib/inviteModal.svelte';

	function closeModal() {
		showInviteModal = false;
	}
</script>

<div class="grouping">
	<form action="upload.php" method="post" enctype="multipart/form-data">
		<fieldset class="form-fieldset">
			<legend><h1>About your project</h1></legend>
			<div class="fieldsetCombine">
				<label for="image">Title</label>
				<input class="text" type="text" required placeholder="Title" autocomplete="on" value="" />
			</div>
			<div class="fieldsetCombine">
				<label for="image">Picture</label>
				<DragenDroppUploadProces DragType="image" />
			</div>
			<div class="fieldsetCombine">
				<label for="image">Description</label>
				<input
					class="text"
					type="text"
					required
					placeholder="Description"
					autocomplete="on"
					value=""
				/>
			</div>
		</fieldset>
		<div class="members">
			<div class="addMember">
				<img class="profilePic" src="/man1.jpg" alt="" />
				<p class="profileName">Bart-Jan</p>
			</div>
			<div class="addMember">
				<img class="profilePic" src="/man2.jpg" alt="" />
				<p class="profileName">Sundous</p>
			</div>
			<div class="addMember">
				<img class="profilePic" src="/man3.jpg" alt="" />
				<p class="profileName">Bram</p>
			</div>
			<div class="addMember">
				<button class="submit-button" on:click={() => (showInviteModal = true)}>+</button>
				<p class="profileName">+ add members</p>
			</div>
		</div>
		<div class="combineButtons">
			<button class="save">Save as draft</button>
			<input type="submit" value="Upload" class="submit" />
		</div>
	</form>
</div>
<InviteModal {showInviteModal} {closeModal} />

<style>
	label {
		margin: 0 0 1em 0;
	}

	.members {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem;
		margin: 1em 0;
	}

	.addMember {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.profilePic {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: grey;
	}

	form {
		max-width: 90%;
		margin: 0 auto;
		gap: 1em;
	}

	.form-fieldset {
		gap: 2rem;
		padding: 2rem;
		border: 0.1rem solid #e5e5e5;
		border-radius: 0.5rem;
		display: grid;
	}

	label {
		grid-column: 1 / -1;
	}

	.text {
		width: 100%;
		height: 3rem;
		padding: 0.5rem 2rem;
		font-size: 1em;
		font-weight: 400;
		color: #000;
		box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
		-webkit-appearance: none;
		cursor: pointer;
		border: 1px solid #ffeb66;
	}

	.submit-button {
		display: flex;
		width: 2.75rem;
		height: 2.75rem;
		justify-content: center;
		align-items: center;
		background: #ffeb66;
		border: 0px;
		cursor: pointer;
		font-size: 2em;
		font-weight: 600;
	}

	.submit {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ffeb66;
		border: 0px;
		cursor: pointer;
		font-size: 1em;
		font-weight: 600;
		padding: 0.6em 1em;
	}

	h1 {
		font-size: 1em;
		color: #a3a3a3;
		font-weight: 400;
	}

	.uploadPhoto {
		width: 100%;
		height: 7rem;
		padding: 0.5rem 2rem;
		font-size: 1em;
		font-weight: 400;
		color: #000;
		box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
		-webkit-appearance: none;
		cursor: pointer;
		border: 1px solid #ffeb66;
	}

	.save {
		background: none;
		border: 0px;
		cursor: pointer;
		font-size: 1em;
		font-weight: 600;
		padding: 0em;
		min-width: 3em;
	}

	.save:hover {
		text-decoration: underline;
		cursor: pointer;
		font-size: 1em;
		font-weight: 600;
		padding: 0em;
	}

	.combineButtons {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
