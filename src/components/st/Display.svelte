<script>
  //   import { onDestroy } from "svelte";
  import { count, customCount } from "../../store/stores.js";

  //   let counter = 0;

  //   const unsubscribe = count.subscribe((value) => {
  //     counter = value;
  //   });

  //   onDestroy(unsubscribe);

  //   hamu awana la barambar dolar sayna ka krawn ba comment `$count`
</script>

<h1 class="text-gray-50 text-2xl font-bold text-center">
  Store counter is {$count}
</h1>
<h1 class="text-gray-50 text-2xl font-bold text-center">
  Store custom Counter is {$customCount}
</h1>

<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={() => customCount.increment(5)}
>
  Increment 5
</button>
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={() => customCount.increment()}
>
  Increment
</button>
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={() => customCount.decrement(5)}
>
  Decrement 5
</button>
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={() => customCount.decrement()}
>
  Decrement
</button>
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={() => customCount.reset()}
>
  Reset
</button>
