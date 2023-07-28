<script>
  import { onMount } from "svelte";

  let posts = [];
  let focusRef;
  let username = "Bilal";

  onMount(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await response.json();
    console.log(posts);
    focusRef.focus();
  });
</script>

<input
  type="text"
  placeholder="FullName"
  bind:this={focusRef}
  bind:value={username}
  class="border border-gray-300 rounded-md p-2 w-1/2 my-3"
/> {username}
<div class="container grid grid-cols-4 gap-1 mx-auto">
  {#each posts as post (post)}
    <div
      class="bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400"
    >
      <span class="font-bold">id :</span>
      {post.id}
      <span class="font-bold">title :</span>
      {post.title}
      <span class="font-bold">body :</span>
      {post.body}
    </div>
  {:else}
    <p>Loading...</p>
  {/each}
</div>
