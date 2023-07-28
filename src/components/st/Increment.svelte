<script>
  import { count } from "../../store/stores.js";

  function increment() {
    count.update((value) => {
      return value + 5;
    });
  }
</script>

<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={increment}
>
  Increment 5
</button>
