<script>
  import { country } from './board7_store.js';
  export let location;
  
  function setCountry(value) {
    // We can use this here because _layout calls useLocalStorage for country.
    // If you have multiple variables to store each will need to be called 
    // in the same way in the _layout file.
    country.set(value);
  }
</script>
<button on:click={()=> setCountry(location)}>Select {location}</button>