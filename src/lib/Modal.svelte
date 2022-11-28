
<script>
  import { createEventDispatcher } from "svelte";


    const dispatch = createEventDispatcher()
    const close = () => {
        dispatch("close")
    }

    const onSubmit = () => {
      dispatch("submit")
    }
</script>

<div
class="relative z-10 w-full"
aria-labelledby="modal-title"
role="dialog"
aria-modal="true"
>
<div class="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" />

<div class="fixed z-10 inset-0 overflow-y-auto">
  <div
    class="flex items-center sm:items-center justify-center min-h-full  text-center sm:p-10"
  >
    <div
      class="relative w-full bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6"
    >
      <form class="mt-5 sm:mt-6" on:submit|preventDefault={onSubmit}>
        <slot />
        <div class="flex justify-between">
          <button
            type="button"
            class="px-2 py-1 bg-gray-300 border rounded hover:bg-gray-200"
            on:click={close}>Close</button
          >
          <slot name="right-button" ></slot>
        </div>
      </form>
    </div>
  </div>
</div>
</div>