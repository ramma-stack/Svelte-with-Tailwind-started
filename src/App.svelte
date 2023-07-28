<script>
  import Basic from "./components/Basic.svelte";
  import Form from "./components/Form.svelte";
  import Dicts from "./components/Dicts.svelte";
  import ComponentA from "./components/ComponentA.svelte";
  import { setContext } from "svelte";
  import Popup from "./components/Popup.svelte";
  import Outer from "./components/Outer.svelte";
  import Button from "./components/Button.svelte";
  import Card from "./components/Card.svelte";
  import Mount from "./components/Mount.svelte";
  import TabA from "./components/Tabs/TabA.svelte";
  import TabB from "./components/Tabs/TabB.svelte";
  import TabC from "./components/Tabs/TabC.svelte";
  import Counter, { totalCount } from "./components/Counter.svelte";
  import Display from "./components/st/Display.svelte";
  import Increment from "./components/st/Increment.svelte";
  import Decrement from "./components/st/Decrement.svelte";
  import Reset from "./components/st/Reset.svelte";
  import Timer from "./components/st/Timer.svelte";

  const username = "Bilal";
  const heroName = "Batman";
  const obj = {
    propName: "Bilal",
    heroName: "Superman",
  };
  const arrName = ["Bilal", "Ramyar", "Ali"];

  setContext("username", username);

  let showPopup = false;

  function closePopup(name) {
    showPopup = false;
    console.log(name.type, name.detail);
  }

  function showAlert(e) {
    alert(e.detail);
  }

  let changeTab = TabA;
</script>

<main class="bg-gray-700 h-[100vh] p-3 flex flex-col items-center gap-10">
  <!-- view some point not show on course
  1- hooks
  2- special elements
 -->

  <!-- <Basic /> -->
  <!-- <Form /> -->
  <!-- <Dicts propName="Ramyar" {heroName} /> -->
  <!-- <Dicts {...obj} {arrName} /> -->
  <!-- <ComponentA /> -->
  <!-- <div class="bg-gray-700 h-[120vh] flex flex-col items-center gap-5 p-5">
    <button
      type="button"
      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      on:click={() => (showPopup = true)}
    >
      Show Popup
    </button>
    {#if showPopup}
      <Popup on:closePopup={closePopup} />
    {/if}
  </div> -->
  <!-- <Outer on:greet={showAlert} />
  <Button
    on:click={() => { 
      alert("Clicked!");
    }}
  /> -->
  <!-- <div class="flex flex-col gap-2">
    <Card content="Card Number 1" />
    <Card content="Card Number 2" />
    <Card content="Card Number 3" />
    <Card>My name is {username}</Card>
    <Card><h1>This is h1 information</h1></Card>
    <Card>
      <img src="https://picsum.photos/200" alt="" />
    </Card>
    <Card />
    <Card>
      <h1
        class="text-2xl text-gray-800 dark:text-gray-100"
        slot="header"
      >
        Header Section
      </h1>
      <h1
        class="text-2xl text-gray-800 dark:text-gray-100"
        slot="content"
      >
        <img src="https://picsum.photos/200" alt="">
      </h1>
      <h1
        class="text-2xl text-gray-800 dark:text-gray-100"
        slot="fooder"
      >
        Fooder section
      </h1>
    </Card>
    <Card>
      <span slot="head" let:fistName let:lastName>
        This name is {fistName} {lastName}
      </span>
    </Card>
    <Card>
      <span slot="head" let:fistName let:lastName>
        This name is {fistName}, {lastName}
      </span>
    </Card>
    <Card>
      <span slot="head" let:fistName>
        This name is {fistName}
      </span>
    </Card>
  </div> -->
  <!-- <Mount /> -->

  <!-- <div
    class="border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
  >
    <div
      class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    >
      <div
        class="bg-gray-100 border-b rounded-t-xl pt-3 px-4 md:pt-4 md:px-5 dark:bg-slate-800 dark:border-gray-700"
      >
        <nav class="flex space-x-2" aria-label="Tabs">
          <button
            class="-mb-px py-3 px-4 text-sm font-medium text-center {changeTab ==
            TabA
              ? 'bg-blue-500'
              : ''} border-b border-gray-200 text-gray-50 duration-200 rounded-t-lg hover:text-gray-700 focus:z-10 dark:border-gray-700 dark:hover:text-gray-400"
            on:click={() => (changeTab = TabA)}
          >
            Tab A
          </button>

          <button
            class="-mb-px py-3 px-4 text-sm font-medium text-center {changeTab ==
            TabB
              ? 'bg-blue-500'
              : ''} border-b border-gray-200 text-gray-50 duration-200 rounded-t-lg hover:text-gray-700 focus:z-10 dark:border-gray-700 dark:hover:text-gray-400"
            on:click={() => (changeTab = TabB)}
          >
            Tab B
          </button>

          <button
            class="-mb-px py-3 px-4 text-sm font-medium text-center {changeTab ==
            TabC
              ? 'bg-blue-500'
              : ''} border-b border-gray-100 text-gray-50 duration-200 rounded-t-lg hover:text-gray-700 focus:z-10 dark:border-gray-700 dark:hover:text-gray-400"
            on:click={() => (changeTab = TabC)}
          >
            Tab C
          </button>
        </nav>
      </div>
      <svelte:component this={changeTab} />
    </div>
  </div> -->

  <!-- pesh away bchina naw store -->
  <!-- <button
    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    on:click={() => alert(totalCount())}>Click for alert total count</button
  > -->
  <!-- <Counter />
  <Counter />
  <Counter /> -->
  <!-- lerawa achina naw store -->
  <Timer />
  <Display />
  <!-- <Increment />
  <Decrement />
  <Reset /> -->
</main>
