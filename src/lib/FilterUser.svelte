
<script>
  import { createEventDispatcher } from "svelte";


    // export let filterUser
    const dispatch = createEventDispatcher()
    const filter = (e) => {
        dispatch("filter", e.target.value)
    }
</script>
<div>
    <label for="user-filter">Filter User</label>
    <select on:change={filter} name="user-filter" id="user-filter" class="border rounded-lg px-4 py-2 ml-4">
            <option default value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">inActive</option>
    </select>
</div>