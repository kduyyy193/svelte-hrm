<script>
  import { createEventDispatcher } from 'svelte';
  import * as yup from 'yup';
  import Modal from "./Modal.svelte";
  
  const schema = yup.object().shape({
		name: yup.string().required('Name is required'),
		email: yup.string().required('Please provide your email').email("Invalid email"),
    sex: yup.string().required("Fill is require"),
    status: yup.string().required("Fill is require")
	});

  let showModal = false;

  let newUser = {};
  let errors = {}
  
  const dispatch = createEventDispatcher()

  const handleSubmit = async () => {
    try {
			await schema.validate(newUser, { abortEarly: false });
			errors = {};
      showModal = false 
		} catch (err) {
			errors = extractErrors(err);
		}
    if(Object.keys(newUser).length !== 0 && Object.keys(errors).length === 0 ) {
      dispatch("addnewuser", newUser)
      newUser = {}
    }
  };
  const  extractErrors = (err) => {
		return err.inner.reduce((acc, err) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	}
</script>

<div>
  <button
    on:click={() => (showModal = true)}
    class=" py-1 px-2  text-white rounded-lg bg-blue-600">NewUser</button
  >
  {#if showModal}
    <Modal on:submit={handleSubmit} on:close={() => (showModal = false)}>
        <h1 class="text-2xl text-center font-semibold tracking-widest">Add New User</h1>
        <form class="px-4">
          <div class="flex flex-col p-2 my-2 text-md">
            <div class="flex items-center my-2">
              <label for="name">Name:</label>
              <input
                bind:value={newUser.name}
                class=" border-b-2 ml-4 pl-2  border-gray-500 flex-grow  focus:!outline-none"
                type="text"
                name="nameuser"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <p class="text-sm text-red-500"> {#if errors.name}{errors.name}{/if}
</p>            
            <div class="flex items-center my-2">
              <label for="email">Email:</label>
              <input
                class=" border-b-2 ml-4  pl-2 border-gray-500 flex-grow  focus:!outline-none"
                bind:value={newUser.email}
                type="email"
                name="emailuser"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <p class="text-sm text-red-500"> {#if errors.email}{errors.email}{/if}</p>
            <div class="my-2 flex justify-between">
              <label for="sex">Sex:</label>
              <div class="flex">
                <label for="male">Male</label>
                <input
                  type="radio"
                  bind:group={newUser.sex}
                  value="male"
                  id="male"
                  name="sex"
                  class="px-2 my-2 w-full rounded border mx-5"
                  checked
                />
                <label for="female">Female</label>
                <input
                  type="radio"
                  bind:group={newUser.sex}
                  value="female"
                  id="female"
                  name="sex"
                  class="px-2 my-2 w-full rounded border mx-5"
                />
              </div>
            </div>
            <p class="text-sm text-red-500"> {#if errors.sex}{errors.sex}{/if}
  </p>          <div class="py-1 my-2 flex justify-between">
              <label for="true">Active:</label>
              <div class="flex">
                <label for="true">Yes</label>
                <input
                  type="radio"
                  bind:group={newUser.status}
                  value="active"
                  id="true"
                  name="active"
                  class="px-2 py-1 w-full rounded border mx-5"
                  checked={true}
                />
                <label for="false">No</label>
                <input
                  type="radio"
                  bind:group={newUser.status}
                  value="inactive"
                  id="false"
                  name="active"
                  class="px-2 py-1 w-full rounded border mx-5"
                  checked={false}
                />
              </div>
            </div>
            <p class="text-sm text-red-500"> {#if errors.status}{errors.status}{/if}</p>
          </div>
        </form>
      <button
        slot="right-button"
        type="submit"
        class="py-1 px-4 hover:opacity-90  text-white rounded-lg bg-blue-600"
        >Add</button
      >
    </Modal>
  {/if}
</div>
