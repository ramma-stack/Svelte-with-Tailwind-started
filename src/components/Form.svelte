<script>
  const formValues = {
    name: "",
    profileSummary: "",
    country: "",
    jobLocation: [],
    remoteWork: false,
    skillSet: [],
    yearsOfExperience: '',
  };

  function submitForm() {
    console.log(formValues.name);
  }
</script>

<main class="bg-gray-700 h-[200vh] w-full p-10 flex justify-center">
  <!-- Hero -->
  <div class="w-1/2">
    <div class="flex gap-10">
      <div class="py-6 flex items-center text-gray-100 text-2xl">
        <pre>
          {JSON.stringify(formValues, null, 2)}
        </pre>
      </div>

      <!-- Form -->
      <form on:submit|preventDefault={submitForm} class="w-full">
        <div class="mb-4">
          <input
            type="text"
            id="hs-hero-name-2"
            class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Name"
            bind:value={formValues.name}
          />
        </div>
        <div class="mb-4">
          <textarea
            id="hs-hero-name-2"
            class="py-1 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Profile Summary"
            bind:value={formValues.profileSummary}
          />
        </div>
        <select
          class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          bind:value={formValues.country}
        >
          <option value="">Open this select country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
        </select>

        <div class="mt-4">
          <label
            for="hs-inline-add-on"
            class="block text-sm font-medium mb-2 text-white"
            >Job Location</label
          >
          <select
            class="py-3 px-4 mt-2 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            bind:value={formValues.jobLocation}
            multiple
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>

        <div class="mt-4 flex gap-2">
          <input
            type="checkbox"
            id="remoteWork"
            bind:checked={formValues.remoteWork}
          />
          <label for="remoteWork" class="block text-sm font-medium text-white">
            Open to Remote Work?
          </label>
        </div>

        <div class="mt-4 flex gap-2">
          <input type="checkbox" id="html" value="html" bind:group={formValues.skillSet} />
          <label for="html" class="block text-sm font-medium text-white">
            Html
          </label>
          <input type="checkbox" id="css" value="css" bind:group={formValues.skillSet} />
          <label for="css" class="block text-sm font-medium text-white">
            CSS
          </label>
          <input type="checkbox" id="javascript" value="javascript" bind:group={formValues.skillSet} />
          <label for="javascript" class="block text-sm font-medium text-white">
            Javascript
          </label>
        </div>

        <div class="mt-4 flex gap-2">
          <input type="radio" id="0-2" value="0-2" bind:group={formValues.yearsOfExperience} />
          <label for="0-2" class="block text-sm font-medium text-white">
            0-2
          </label>
          <input type="radio" id="2-5" value="2-5" bind:group={formValues.yearsOfExperience} />
          <label for="2-5" class="block text-sm font-medium text-white">
            2-5
          </label>
          <input type="radio" id="5-10" value="5-10" bind:group={formValues.yearsOfExperience} />
          <label for="5-10" class="block text-sm font-medium text-white">
            5-10
          </label>
          <input type="radio" id="10+" value="10+" bind:group={formValues.yearsOfExperience} />
          <label for="10+" class="block text-sm font-medium text-white">
            10+
          </label>
        </div>

        <div class="grid">
          <button
            type="submit"
            class="py-3 px-4 mt-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4"
          >
            Submit
          </button>
        </div>
      </form>
      <!-- End Form -->
    </div>
  </div>
</main>
