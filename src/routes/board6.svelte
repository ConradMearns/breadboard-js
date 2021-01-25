<h1>Hello!</h1>

<!-- Remember to edit _layout.svelte soon -->

<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
  $: console.log($page);
</script>

Query Parameters can be understood within Sapper. Click on one of the links below and observe the URL to understand the debug output.

<br>
<a href="board6">No Query</a>
<br>
<a href="board6?test=good">Single query</a>
<br>
<a href="board6?start=10&end=100&color=red">Multiple queries</a>

<pre>
{$page.path}
</pre>

<pre>
{JSON.stringify($page.query)}
</pre>