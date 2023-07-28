<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function greet() {
    dispatch("greet", "Hello from Inner Component");
  }
</script>

<main>
  <button
    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    type="button"
    on:click={greet}>Greet</button
  >
</main>
