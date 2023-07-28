<script>
  import { count } from "../../store/stores.js";

  function decrement() {
    count.update((value) => {
      return value - 1;
    });
  }
</script>

<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={decrement}
>
  Decrement
</button>
