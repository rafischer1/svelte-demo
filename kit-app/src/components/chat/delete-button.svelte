<script>
    import {chat} from "../../stores";

    export let chat_id;
    const handleClick = () => {
        chat.update((_old) => {
            return _old.filter((entry) => entry.id !== chat_id)
        })
    }
</script>

<div class="dlt-btn" on:click={handleClick}>[x]</div>

<style>
    .dlt-btn {
        margin-left: 5px;
        cursor: pointer;
    }

    .dlt-btn:hover {
        color: pink;
    }

    .dlt-btn:active {
        color: #e6ccd0;
    }
</style>
