
<script>
  import { country } from './board7_store.js';
  import Btn from './board7_Btn.svelte';
  
  // Make sure we're running on the client
  if (process.browser) {
      // Before we can use set on country we need to call the
    // useLocalStorage doing this at the _layout file makes
    // all routes and components exposed to this so we can
    // import the state and call set anywhere like Btn.svelte
    country.useLocalStorage();
    
    // Log it to make sure it works client side
    console.log(localStorage.getItem('country'))
  }
</script>

<p>Current country is {$country}</p>

<Btn location="USA" />
<Btn location="CA" />
<Btn location="MX" />

<br><br>

From:
<br>
https://gist.github.com/JHethDev/7cdd180a941df0168af6e8799c406bd0
<br>
Uses Svelte Store and localStorage to maintain state across page reloads.