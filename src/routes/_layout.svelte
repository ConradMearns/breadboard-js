<script>
	import Nav from '../Nav.svelte';

	export let segment;
</script>

<!-- <style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<!-- https://medium.com/@davidmellul/make-a-sidebar-for-your-website-the-easy-way-html5-css3-vanillajs-eccbb4d0cff6 -->

<style>

main {
  width: 100%;
  height: 100%;
  margin: 0;
}

main {
  height: 100%;
  overflow:auto;
  float:left;
  transition: width .35s;
}

main {
  width: 70%;
}

</style>