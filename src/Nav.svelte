<script>
	export let segment;

	let boards = [
		"A Pomodoro Timer",
		"retro",
		"prosemirror tests",
		"Pomodoro Task Calculator",
		"Event List"
	];
</script>


<nav class="s">
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">About</a></li>

		{#each boards as b, i}
			<li><a aria-current="{segment === {b} ? 'page' : undefined}" href="board{i}">{i}: {b}</a></li>
		{/each}
	</ul>
</nav>


<!-- https://medium.com/@davidmellul/make-a-sidebar-for-your-website-the-easy-way-html5-css3-vanillajs-eccbb4d0cff6 -->


<style>

html, main {
  width: 100%;
  height: 100%;
  margin: 0;
}

nav, main {
  height: 100%;
  overflow:auto;
  float:left;
  transition: width .35s;
}

nav {
  background:grey;
  width: 30%;
}

.collapsed {
  width: 0;
}

.collapsed + main {
  width: 100%;
}

main {
  background:gray;
  width: 70%;
}

</style>