<script>
  import {games} from "../../stores";
  import ChatForm from "./chat-form.svelte"
  import DeleteButton from "./delete-button.svelte"
  import TimeDisplay from "../time-display.svelte"

  let liveGames = [];

  games.subscribe(value => {
      liveGames = value;
  });
</script>

<div class="chat-container">
    {#each liveGames as game, index}
 <div class="chat-box">
    <h2>{game.teamHome} v {game.teamAway}</h2>
    <div class="chat-body">
<!--        <div class="chat-line">{game.id} <DeleteButton chat_id={game.id}/></div>-->
        <h2>{game.scoreHome} - {game.scoreAway}</h2>
        <TimeDisplay time="{game.minute}" live="{game.live}" />
    </div>
<!--    <ChatForm chat_id="{game.id}"/>-->
    <h4>Chat Footer: {game.id}</h4>
 </div>
    {/each}
</div>

<style>
    .chat-container {
        background-color: #dac671;
        width: 75%;
        margin: auto;
    }
    .chat-box {
        border: 5px double black;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .chat-body {
        background: rgba(240, 239, 239, 0.9);
        border: 1px solid rgba(240, 239, 239, 0.7);
        margin: 3px 10px 3px 15px;
        border-radius: 5px;
        padding: 5%;
    }

</style>
