<script>
    export let time;
    export let live = false;
</script>

<h3 class="game-time" class:blink={live}>{time}'</h3>

<style>
    .game-time {
        color: black;
    }

    .blink {
        animation: 1.5s linear infinite condemned_blink_effect;
        color: red;
    }

    @keyframes condemned_blink_effect {
        0% {
            visibility: hidden;
        }
        50% {
            visibility: hidden;
        }
        100% {
            visibility: visible;
        }
    }
</style>
