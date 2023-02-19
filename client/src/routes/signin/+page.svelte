<script>
    import {api} from '../../api/api'
    let username = "";
    let password = "";
    let login = async()=> {
        let result = await api.login({username,password});
    }
</script>

This is SignIn Page

<div>
    <form class=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="text-center text-blue-500 text-2xl">SignIn</div>

        <div class="flex justify-center mt-16 ">
            <label class="mr-4">username:</label>
            <input bind:value={username} />
        </div>
        <div class="flex justify-center mt-16">
            <label class="mr-4">Password:</label>
            <input bind:value={password} />
        </div>
        <div class="text-center rounded">
            <button class="bg-yellow-300 mt-14 rounded text-2xl" on:click={login}>SignIn</button>
        </div>
    </form>
</div>
