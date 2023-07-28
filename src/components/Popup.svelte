<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<main class="flex flex-col items-center gap-2">
  <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">
    This is a Popup
  </h1>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    on:click={() => dispatch("closePopup", "Ramyar")}
  >
    Close Popup
  </button>
</main>
