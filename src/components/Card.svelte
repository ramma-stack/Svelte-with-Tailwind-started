<script>
  const names = [
    { name: "Bilal", age: 20 },
    { name: "Ramyar", age: 21 },
    { name: "Ali", age: 22 },
  ];
</script>

<div
  class="w-64 flex flex-col items-center gap-2 bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400"
>
  <!-- <slot name="header" />
  <slot name="content">Default Content</slot>
  {#if $$slots.fooder}
    <slot name="fooder" />
  {/if} -->

  {#each names as name}
    <slot name="head" fistName={name.name} lastName={name.age} />
  {/each}
</div>
