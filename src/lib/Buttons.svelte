<script lang="ts">
	export let variant:
		| 'primary'
		| 'start-yellow'
		| 'start-blue'
		| 'start-grey'
		| 'details'
		| 'view-yellow'
		| 'view-grey'
		| 'view-challenge'
		| 'edit'
		| 'left'
		| 'right'
		| 'yes'
		| 'no';

	export let handleClick = () => {};
	export let href: string = '';

	export let size: 'small' | 'medium' | 'large' | 'none' = 'none';
	export let hasIcon: boolean = false;
</script>

{#if href != ''}
	<a class="{variant} size-{size} icon-{hasIcon}" {href}><slot /></a>
{:else}
	<button class="{variant} size-{size} icon-{hasIcon}" on:click={handleClick}><slot /></button>
{/if}

<style>
	.size-small {
		font-size: 1rem;
		padding: 8px 21px !important;
	}

	.icon-true {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.size-medium {
		font-size: 1rem;
		padding: 8px 42px;
	}

	.size-large {
		font-size: 1.2rem !important;
		padding: 1.5rem !important;
	}

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

	button, a {
		background-color: #21bde5;
		color: #fff;
		font-size: 1.2rem;
		padding: 1rem;
		font-weight: 700;
		outline: none;
		border: none;
		cursor: pointer;
	}

	button:hover, a:hover {
		background-color: #32a5c3;
	}

	.start-yellow,
	.primary {
		background-color: #f7ce46;
		color: #000000;
	}

	.start-yellow:hover {
		background-color: #e1b114;
	}

	.start-blue {
		min-width: 12rem;
		height: 4rem;
	}

	.start-grey {
		background-color: #b1afa9;
		color: #000000;
		cursor: pointer;
	}

	.details {
		background-color: #f7ce46;
		color: #000000;
		min-width: 8rem;
		height: 4rem;
	}

	.details:hover {
		background-color: #e1b114;
	}

	.view-yellow {
		background-color: #f7ce46;
		color: #000000;
		min-width: 10rem;
		height: 4rem;
	}

	.view-yellow:hover {
		background-color: #e1b114;
	}

	.view-grey {
		background-color: #b1afa9;
		color: #000000;
		min-width: 10rem;
		height: 4rem;
	}

	.view-challenge {
		background-color: #f7ce46;
		color: #000000;
		width: 22rem;
		height: 4rem;
		position: relative;
		padding-right: 2rem;
	}

	.view-challenge::after {
		content: '\f06e';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
	}

	.view-challenge:hover {
		background-color: #e1b114;
	}

	.edit {
		width: 22rem;
		height: 4rem;
		position: relative;
		padding-right: 2rem;
	}

	.edit::after {
		content: '\f044';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
	}

	.left {
		width: 5rem;
		height: 5rem;
		position: relative;
		background-color: #ffffff;
		color: #000000;
		border: 1px solid #000000;
	}

	.left:hover {
		background-color: #d8d7d4;
	}

	.left::after {
		content: '\f060';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.right {
		width: 5rem;
		height: 5rem;
		position: relative;
		background-color: #ffffff;
		color: #000000;
		border: 1px solid #000000;
	}

	.right::after {
		content: '\f061';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.right:hover {
		background-color: #d8d7d4;
	}

	.yes {
		background-color: #38d248;
		width: 10rem;
		height: 4rem;
		position: relative;
	}

	.yes:hover {
		background-color: #269560;
	}

	.yes::after {
		content: '\f00c';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.no {
		background-color: #ff3939;
		width: 10rem;
		height: 4rem;
		position: relative;
	}

	.no:hover {
		background-color: #ad1f1f;
	}

	.no::after {
		content: '\f00d';
		font-family: 'Font Awesome 5 Free';
		position: absolute;
		right: 45%;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
