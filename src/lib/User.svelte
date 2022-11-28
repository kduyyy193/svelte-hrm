<script>
  import { createEventDispatcher } from "svelte";
  import { scale } from "svelte/transition";

  export let user;
  export let idx;

  const dispatch = createEventDispatcher();
  const remove = (id) => {
    dispatch("remove", id);
  };
</script>

<div
  transition:scale={{duration: 1000}}
  class="flex mt-4  relative  items-center border p-2 rounded-lg shadow hover:shadow-md cursor-pointer"
>
  <button class="w-4" on:click={() => {
    remove(user.id)
  }}
    ><img
      class=" absolute hover:opacity-80 top-0 right-0 -mt-3 w-4 h-4"
      src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
      alt=""
    /></button
  >
  <p class="mr-2 ">{idx + 1}.</p>
  {#if user.active == "active"}
    <div class="w-4 min-w-fit h-4 rounded-full mr-4 bg-green-600" />
  {:else}
    <div class="w-4 min-w-fit h-4 rounded-full mr-4 bg-gray-600" />
  {/if}
  <img class="rounded-full w-12 h-12 " src={user.image} alt={user.name} />
  <p class="mx-2  text-center capitalize">{user.name}</p>
  <p class=" mx-2 text-center">{user.email}</p>
</div>
