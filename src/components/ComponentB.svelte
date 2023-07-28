<script>
  import ComponentC from "./ComponentC.svelte";
  import { getContext } from "svelte";

  const username = getContext("username");
</script>

<main>
  <h1>Component B</h1>
  <h1>This name is {username}</h1>
  <ComponentC />
</main>
