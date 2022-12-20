<script>
  import {chat} from "../../stores";
  import ChatForm from "./chat-form.svelte"
  import DeleteButton from "./delete-button.svelte"

  let chats = [];

  chat.subscribe(value => {
      chats = value;
  });
</script>

<div class="chat-container">
 <div class="chat-box">
    <h3>Chat 1 Header</h3>
    <div class="chat-body">
        {#each chats as entry, index}
            <div class="chat-line">{entry.id}: {entry.text} <DeleteButton chat_id={entry.id}/></div>
        {/each}
    </div>
    <ChatForm />
    <h4>Chat Footer</h4>
 </div>
</div>

<style>
    .chat-box {
        border: 5px double black;
        width: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .chat-line {
        text-align: center;
        display: flex;
    }

    .chat-body {
        background: rgba(240, 239, 239, 0.9);
        border: 1px solid rgba(240, 239, 239, 0.7);
        margin: 3px 10px 3px 15px;
        border-radius: 5px;
        padding: 5%;
    }

</style>
