<script>
    import {chat} from "../../stores";
    let response = ""
    const handleClick = () => {
        chat.update((_old) => {
            const index = _old.length
            return [..._old, {user_id: 1, id: index + 1, text:response}]
        })
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
