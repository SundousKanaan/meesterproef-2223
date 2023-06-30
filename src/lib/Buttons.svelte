<script lang="ts">
	export let variant:
			"primary" |
			"start-yellow" |
			"start-blue" |
			"start-grey" |
			"details" |
			"view-yellow" |
			"view-grey" |
			"view-challenge" |
			"edit" |
			"left" |
			"right" |
			"up" |
			"yes" |
			"no" |
			"savexit" |
			"skipcancel";

	export let handleClick = () => {};

	export let size: "small" | "medium" | "large" | "none" = "none";
	export let hasIcon: boolean = false;
	export let href: string = "";

</script>

{#if href}
	<a class="{variant} size-{size} icon-{hasIcon}" href={href}><slot/></a>
{:else}
	<button class="{variant} size-{size} icon-{hasIcon}" on:click={handleClick}><slot/></button>
{/if}

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

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

	button{
		background-color: var(--blue-button);
		color: var(--white);
		font-family: var(--font-family);
		font-size: 1.2rem;
		padding: 1rem;
		font-weight: 700;
		outline: none;
		border: none;
		cursor: pointer;
	}

	button:hover{
		background-color: var(--theme-secondary);
	}

	.start-yellow,
	.primary {
		background-color: var(--theme-color);
		color: var(--black);
	}

	.start-yellow:hover{
		background-color: var(--primary-600);
	}

	.start-blue{
		background-color: var(--blue-button);
		color: var(--white);
	}

	.start-grey{
		background-color: var(--neutral-500);
		color: var(--black);
	}

	.start-grey:hover{
		background-color: var(--neutral-500);
	}

	.details{
		background-color: var(--primary-500);
		color: var(--black);
		width: 8rem;
		height: 4rem;
	}

	.details:hover{
		background-color: var(--primary-600);
	}

	.view-yellow{
		background-color: var(--primary-500);
		color: var(--black);
	}

	.view-yellow:hover{
		background-color: var(--primary-600);
	}

	.view-grey{
		background-color: var(--neutral-600);
		color: var(--black);
		width: 10rem;
		height: 4rem;
	}

	.view-challenge {
		background-color: var(--primary-500);
		color: var(--black);
		position: relative;
		width: 22rem;
		height: 4rem;
		padding-right: 2rem;
	}

	.view-challenge::after {
		content: "\f06e";
		font-family: "Font Awesome 5 Free";
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
	}

	.view-challenge:hover{
		background-color: var(--primary-600);
	}

	.edit{
		width: 22rem;
		height: 4rem;
		position: relative;
		padding-right: 2rem;
	}

	.edit::after {
		content: "\f044";
		font-family: "Font Awesome 5 Free";
		position: absolute;
		right: 10%;
		top: 50%;
		transform: translateY(-50%);
	}

	.left{
		width: 5rem;
		height: 5rem;
		position: relative;
		background-color: var(--white);
		color: var(--black);
		border: 1px solid var(--black);
	}

	.left:hover{
		background-color: #D8D7D4;
	}

	.left::after {
		content: "\f060";
		font-family: "Font Awesome 5 Free";
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);

	}

	.right{
		width: 5rem;
		height: 5rem;
		position: relative;
		background-color: var(--white);
		color: var(--black);
		border: 1px solid var(--black);
	}

	.right::after {
		content: "\f061";
		font-family: "Font Awesome 5 Free";
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.right:hover{
		background-color: var(--neutral-300);
	}

	.up{
		width: 5rem;
		height: 5rem;
		position: relative;
		background-color: var(--white);
		color: var(--black);
		border: 1px solid var(--black);
		position: fixed;
		top: 80%;
		right: 5%;
		z-index: 100;
	}

	.up::after {
		content: "\f062";
		font-family: "Font Awesome 5 Free";
		position: absolute;
		right: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	.up:hover{
		background-color: var(--neutral-300);
	}

	.yes{
		background-color: var(--accent-success-500);
		width: 10rem;
		height: 4rem;
		position: relative;
	}

	.yes:hover{
		background-color: var(--accent-success-700);
	}

	.yes::after {
		content: "\f00c";
		font-family: "Font Awesome 5 Free";
		position: absolute;
		right: 45%;
		top: 50%;
		transform: translateY(-50%);
	}

	.no{
		background-color: var(--accent-danger-500);
		width: 10rem;
		height: 4rem;
		position: relative;
	}

	.no:hover{
		background-color: var(--accent-danger-700);
	}

	.no::after {
		content: "\f00d";
		font-family: "Font Awesome 5 Free";
		position: absolute;
		right: 45%;
		top: 50%;
		transform: translateY(-50%);
	}

	.savexit{
		border: 5px solid var(--blue-button);
		background-color: var(--white);
		color: var(--black);
	}

	.skipcancel{
		border: none;
		color: var(--gray-font);
		background-color: var(--white);
		font-weight: lighter;
	}

	.skipcancel:hover{
		background-color: var(--white);
		color: var(--blue-button);
	}
</style>
