<script>
	// import Nav from '../Nav.svelte';

	export let segment;

	let boards = [
		["🧪", "A Pomodoro Timer"],
		["🧪", "Retro"],
		["🧪", "Prosemirror Testing"],
		["🧪", "Task Time Calculator"],
		["🧪", "Event List"],
		["🧪", "Hashing"],
		["🧪", "Routes"],
		["🧪", "Local Storage"],
		["🧪", "PGP"]
	];

	let isCollapsed = false;

</script>

<nav class:collapsed="{isCollapsed}">
	<br>
	<br>

	<span class="symbol">📜</span>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">About</a>
	
	<br>

	{#each boards as b, i}
		<span class="symbol">{b[0]}</span>
		<a aria-current="{segment === {b} ? 'page' : undefined}" href="board{i}">{b[1]}</a>
		<br>
	{/each}
</nav>

<main>
    <button class:collapsed="{isCollapsed}" on:click="{() => isCollapsed = !isCollapsed}"></button>
	<br>
	<slot></slot>
</main>

<style>
nav, main {
  height: 100%;
  overflow:auto;
  float:left;
  transition: width .35s;
}

nav {
  background:white;
  width: 15%;
  white-space: nowrap;
}

nav.collapsed {
  width: 2%;
}

.symbol {
	padding: 10px;
}

nav.collapsed + main {
  width: 98%;
}

main {
  background:lightblue;
  width: 85%;
}

button {
  width: 30px;
  height: 30px;
  margin: 10px;
  /* background:lightblue; */
  background: white;
  border: 0;
  position: relative;
  top: 10px; left: -25px;
  transform: rotate(45deg);
}

/* button.collapsed { */
  /* background:lightblue; */
  /* background: white; */
/* } */

button:hover {
	border-width: 2px;
	border-style: solid;
	border-color: lightgoldenrodyellow;
}

</style>