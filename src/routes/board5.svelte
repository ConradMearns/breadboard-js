<script>
// <script lang="typescript">
    import sha256 from 'crypto-js/sha256';
    import Crypto from 'crypto-js';
    
    let content = '';
    $: content_hash = sha256(content);

</script>

<input bind:value={content} type="text">

<br>

<pre>
{content_hash}
</pre>
