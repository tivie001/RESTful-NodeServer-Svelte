<script>
	let title = "Home";
	import Nav from "./Nav.svelte";
</script>
<main>
	<Nav />
	<div class="wrapper">
	<div class="one"></div>
	<div class="two"></div>
</div>
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;		
		background-color: #011627;
		height: 100%;
	}
	.wrapper {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(100px, auto);
		margin: 2rem 3rem 2rem 3rem;
	}
	.one {
		grid-column: 1 / 4;
		grid-row: 1 / 7;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0,0,0,.9);
		background-color: #262626;
	}
	.two {
		grid-column: 4 / 6;
		grid-row: 1 / 7;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0,0,0,.9);
		background-color: #262626;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
