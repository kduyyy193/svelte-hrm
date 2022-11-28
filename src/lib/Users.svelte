<script>
  import FilterUser from "./FilterUser.svelte";
  import User from "./User.svelte";
  import AddNewUser from "./AddNewUser.svelte"
  import {users as _users} from "../store"
  import {tweened} from "svelte/motion"
  import { cubicIn } from "svelte/easing";
  import { onMount } from "svelte";
  import { v4 as uuid } from 'uuid'

  let users = []
  _users.subscribe(value => users = value)

  let filterUsers = users
  let statusFilter = "all"

  const progress = tweened(0, {
    duration: 1000,
    easing: cubicIn,
  });
  
  const filterUser = (value) => {
    statusFilter = value.detail;
    if (statusFilter === "all") return filterUsers = users;
    filterUsers = users.filter((user) => user.active === statusFilter);
  };

  const addUser = (value) => {
    const newUser = value.detail
    if(newUser.sex === "male") {
      newUser.image = "https://cdn-icons-png.flaticon.com/512/924/924915.png"
    } else {
      newUser.image = "https://cdn-icons-png.flaticon.com/512/1785/1785896.png"
    }

    users.push({id: uuid(), ...newUser})
    filterUsers = users
    progress.set(filterUsers.length)
  }

  const removeUser = (value) => {
    const idUserRemove = value.detail;
    users = users.filter((user) => user.id !== idUserRemove);
    if (statusFilter === "all") return filterUsers = users;
    filterUsers = users.filter((user) => user.active === statusFilter);
    progress.set(filterUsers.length)
  };

  
  onMount(() => {
    progress.set(filterUsers.length);
  });

</script>

<div>
  <h2 class="text-2xl text-center my-5 font-semibold tracking-widest">
    List User
  </h2>
  <div class="flex items-center justify-between">
    <FilterUser on:filter={filterUser} />
    <AddNewUser on:addnewuser={addUser} /> 
</div>
  <progress max="10" min="0" value={$progress} class="w-full m-4" />
  {#if filterUsers.length}
    {#each filterUsers as user, idx}
      <User on:remove={removeUser} {user} {idx} />
    {/each}
  {:else}
    <p class="mt-5 text-center font-semibold">No User Found</p>
  {/if}
</div>
