<script>
// <script lang="typescript">
    import sha256 from 'crypto-js/sha256';
    import sha512 from 'crypto-js/sha512';
    import CryptoJS from 'crypto-js';
    
    let content = '';
    $: content_hash = sha256(content);
    $: content_hash_512 = sha512(content);

    $: string_hash = content_hash.toString(CryptoJS.enc.Base64)
    $: string_hash_512 = content_hash_512.toString(CryptoJS.enc.Base64)

</script>

<input bind:value={content} type="text">

<br>

<pre>
Sha256: {content_hash}
Base64: {string_hash}
Sha512: {content_hash_512}
Base64 512: {string_hash_512}
</pre>
