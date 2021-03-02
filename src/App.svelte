<script>
	let title = "Home";
	import Nav from "./Nav.svelte";
	import axios from "axios";
	const headers = {
		"x-rapidapi-key": "924e4f502bmsh6d9fa994c57e206p17cf1ejsn010fe7bcd498",
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	}
	const apiRequest = (method) => {
		const options = {
			method: method,
			url: "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-boxoffice-movies&page=1",
			headers: headers
		};
		axios.request(options)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
	};
	async function getResult() {
		await apiRequest("get");
	}
	getResult();
</script>

<main>
	<head>
		<title>{title}</title>
	</head>
	<Nav />
	<div class="wrapper">
		<div class="one" />
		<div class="two" />
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
		margin: 1rem 3rem 2rem 3rem;
	}
	.one {
		grid-column: 1 / 4;
		grid-row: 1 / 7;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.9);
		background-color: #262626;
	}
	.two {
		grid-column: 4 / 6;
		grid-row: 1 / 7;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.9);
		background-color: #262626;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>