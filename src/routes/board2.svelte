<script>
   // import the core component
  import ProsemirrorEditor from 'prosemirror-svelte';

  // import helpers to work with prosemirror state
  import { createSingleLineEditor, toPlainText } from 'prosemirror-svelte/state';  

  // create the initial editor state
  let editorState = createSingleLineEditor('Hello world!');

  let last_keydown = "";

  function handleChange(event) {
    // get the new editor state from event.detail
    editorState = event.detail.editorState;
  }

  function handleKeydown(event) {
    last_keydown = event.key;
    console.log(event)
  }

  // log the text content of the editor state, just for fun
  $: console.log(toPlainText(editorState)); 

</script>

<ProsemirrorEditor 
  placeholder="Go ahead and type something" 
  {editorState} 
  on:change={handleChange}
  on:keydown={handleKeydown}
/>

<pre>{JSON.stringify(last_keydown)}</pre>