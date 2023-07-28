<script>
  import { getContext } from "svelte";

  const username = getContext("username");
</script>

<main>
  <h1>Component C</h1>
  <h1>This name is {username}</h1>
</main>
