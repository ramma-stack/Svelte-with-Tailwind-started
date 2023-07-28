<script>
    const name = "world";
    const fullName = "<b>Ramyar Rebwar</b>";
    const idName = "myId";
    const id = "myId";
    const disabled = true;
    const bool = true;

    const array = ["Ahmad", "Ramyar", "Rebwar"];
    const arr = [
        { name: "Ahmad", age: 20 },
        { name: "Ramyar", age: 21 },
        { name: "Rebwar", age: 22 },
    ];

    let number = 0;

    function IncNumber(num) {
        return () => {
            number += num;
        };
    }
</script>

<main class="bg-gray-700 h-[200vh] p-10 flex flex-col items-center gap-5">
    <h1 id={idName} class="text-blue-100 text-4xl font-bold capitalize">
        hello {name}!
    </h1>
    <h1
        {id}
        class="{bool
            ? 'text-red-200'
            : 'text-gray-50'} text-4xl font-bold capitalize"
    >
        hello {@html fullName}!
    </h1>

    {#if number === 0}
        <h1 class="text-red-200 text-4xl font-bold capitalize">
            Number is equal to zero {number}
        </h1>
    {:else if number > 0}
        <h1 class="text-red-200 text-4xl font-bold capitalize">
            Number is largest than zero {number}
        </h1>
    {:else if number < 0}
        <h1 class="text-red-200 text-4xl font-bold capitalize">
            Number is smallest than zero {number}
        </h1>
    {:else}
        <h1 class="text-red-200 text-4xl font-bold capitalize">
            Number is not a number {number}
        </h1>
    {/if}

    <div class="flex gap-5">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            on:click={() => {
                number++;
            }}
        >
            click increment
        </button>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            on:click={() => {
                number--;
            }}
        >
            click decrement
        </button>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            on:click={() => {
                number = 0;
            }}
        >
            click not a number
        </button>
    </div>

    {#each array as arr, index}
        <h1 class="text-red-50 text-4xl font-bold capitalize">
            {index + 1}
            {arr}
        </h1>
    {/each}

    {#each arr as arr (arr)}
        <h1 class="text-red-50 text-4xl font-bold capitalize">
            {arr.name} age is {arr.age}
        </h1>
    {/each}

    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={IncNumber(5)}
    >
        Click {number}
    </button>
</main>
