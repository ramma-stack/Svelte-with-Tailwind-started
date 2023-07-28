<script>
  let firstName = "John";
  let lastName = "Doe";
  $: fullName = `${firstName} ${lastName}`;

  let items = [
    {
      id: 1,
      name: "TV",
      price: 100,
    },
    {
      id: 2,
      name: "Radio",
      price: 50,
    },
    {
      id: 3,
      name: "Phone",
      price: 200,
    },
  ];
  $: total = items.reduce((total, curr) => (total += curr.price), 0);

  let volume = 0;
  let oldVolume = 0;
  $: if (volume < 0) {
    alert("Volume is too low");
    volume = 0;
  } else if (volume > 20) {
    alert("Volume is too high");
    volume = 20;
  } else if (volume === 16 && oldVolume != 16) {
    alert("This volume is not good!");
    oldVolume = volume;
  } else if (volume < oldVolume) {
    oldVolume = 0;
  }

  export let propName;
  export let heroName = "Default";
  export let arrName;
</script>

<main class="bg-gray-700 h-[200vh] p-10 flex flex-col items-center gap-5">
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={() => {
      firstName = "Jane";
      lastName = "Canade";
    }}
  >
    Change Name
  </button>
  <h1 class="text-gray-50 text-2xl font-semibold">
    Hello {firstName}
    {lastName}!
  </h1>
  <h1 class="text-gray-50 text-2xl font-semibold">Hello {fullName}!</h1>

  <h1 class="text-gray-50 text-2xl font-semibold">
    Total {total}
  </h1>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={() => {
      items = [
        ...items,
        {
          id: 4,
          name: "Computer",
          price: 500,
        },
      ];
    }}
  >
    Add Item
  </button>

  <h1 class="text-gray-50 text-2xl font-semibold">
    Volume {volume}
  </h1>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={() => {
      volume++;
    }}
  >
    Increment Volume
  </button>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={() => {
      volume--;
    }}
  >
    Decrement Volume
  </button>

  <h1 class="text-gray-50 text-2xl font-semibold">
    Component Props name is {propName} and heroName is {heroName}
  </h1>

  <h1 class="text-gray-50 text-2xl font-semibold">
    {#each arrName as item, index}
      <p class="text-gray-50 text-2xl font-semibold">
        {index + 1} -
        {item}
      </p>
    {/each}
  </h1>
</main>
