<script>
    let response = ""
    const handleClick = () => {
        alert(response)
        setTimeout(() => {
            response = ""
        }, 500)

    }
</script>

<div class="chat-input">
    <div>🐼</div>
    <input bind:value={response}/>
    <button  on:click={handleClick} disabled={response === ""}>ENTER</button>
</div>

<style>
    .chat-input {
        display: flex;
        margin: auto;
    }
</style>
