<script>
	// import Nav from '../Nav.svelte';

	export let segment;

	let boards = [
		"A Pomodoro Timer",
		"retro",
		"prosemirror tests",
		"Pomodoro Task Calculator",
		"Event List"
	];

	let isCollapsed = false;

</script>

<nav class:collapsed="{isCollapsed}">
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">About</a></li>

		{#each boards as b, i}
			<li><a aria-current="{segment === {b} ? 'page' : undefined}" href="board{i}">{i}: {b}</a></li>
		{/each}
	</ul>
</nav>

<!-- https://medium.com/@davidmellul/make-a-sidebar-for-your-website-the-easy-way-html5-css3-vanillajs-eccbb4d0cff6 -->

<main>
    <button on:click="{() => isCollapsed = !isCollapsed}"></button>
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
  width: 30%;
}

nav.collapsed {
  width: 0;
}

nav.collapsed + main {
  width: 100%;
}

main {
  background:gray;
  width: 70%;
}

button {
  width: 30px;
  height: 30px;
  margin: 10px;
  /* background: black; */
}
</style>