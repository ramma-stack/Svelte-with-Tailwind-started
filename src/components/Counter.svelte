<script context="module">
  let Total = 0;

  export function totalCount() {
    return Total;
  }
</script>

<script>
  let count = 0;

  function increment() {
    count += 1;
    Total += 1;
  }
</script>

<main class="flex flex-col items-center gap-1">
  <h1 class="text-2xl text-gray-800 dark:text-gray-100">
    The count is {count}
  </h1>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={increment}>+1</button
  >
</main>
