<script>
const openpgp = require('openpgp');

let name = "Jon Smith";
let email = "jon@example.com";

let passphrase = "super long and hard to guess secret";
let showPassphrase = false;

let privateKeyA = '';
let publicKeyA = '';

let cleartext_msg = 'hello!'

let handleClear = function() {
    openpgp.destroyWorker()
    privateKeyA = '';
    publicKeyA = '';

}

let signed = '';

let handleGenerate = function() {
    (async () => {
        const { privateKeyArmored, publicKeyArmored, revocationCertificate } = await openpgp.generateKey({
            userIds: [{ name: name, email: email }], // you can pass multiple user IDs
            curve: 'ed25519',                                           // ECC curve name
            passphrase: passphrase           // protects the private key
        });

        console.log(privateKeyArmored);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
        console.log(publicKeyArmored);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
        console.log(revocationCertificate); // '-----BEGIN PGP PUBLIC KEY BLOCK ... '

        // ---

        privateKeyA = privateKeyArmored;
        publicKeyA = publicKeyArmored;
    })();
}

let handleTestSign = function () {
    (async () => {
        const publicKeyArmored = publicKeyA;
        const privateKeyArmored = privateKeyA;

        // const passphrase = `yourPassphrase`; // what the private key is encrypted with

        const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
        await privateKey.decrypt(passphrase);

        const { data: cleartext } = await openpgp.sign({
            message: openpgp.cleartext.fromText(cleartext_msg), // CleartextMessage or Message object
            privateKeys: [privateKey]                             // for signing
        });
        signed = cleartext;
        console.log(cleartext); // '-----BEGIN PGP SIGNED MESSAGE ... END PGP SIGNATURE-----'

        const verified = await openpgp.verify({
            message: await openpgp.cleartext.readArmored(cleartext),           // parse armored message
            publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys // for verification
        });
        const { valid } = verified.signatures[0];
        if (valid) {
            console.log('signed by key id ' + verified.signatures[0].keyid.toHex());
        } else {
            throw new Error('signature could not be verified');
        }
    })();
}

</script>

<br>
<br>

<label for="Name">Name: <input type="text" name="Name" bind:value={name}></label><br>
<label for="Email">Email: <input type="email" name="Email" bind:value={email}></label><br>
<label for="Passphrase">Pasphrase: <input type="text" name="Passphrase" bind:value={passphrase}></label><br>

<button on:click={handleGenerate}>Generate Key</button>

<br>
<br><br>

<label for="Cleartext">Cleartext: <input type="text" name="Cleartext" bind:value={cleartext_msg}></label><br>
<button on:click={handleTestSign}>Generate Sign</button>

<br>

<pre>
{signed}
</pre>

<br><br><br>

<button on:click={handleClear}>Clear PGP Memory</button>
<button on:click={() => {console.log(openpgp)}}>Log PGP Memory</button>

<br>


Public Key:
<pre>
{publicKeyA}
</pre>

Private Key:
<pre>
{privateKeyA}
</pre>



<style>
pre {
    background: lightgray;
    font-size: 8pt;
    width: 600px;
    padding: 1%;
}
</style>
