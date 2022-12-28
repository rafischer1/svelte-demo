import { writable } from 'svelte/store';

export const chat = writable([{user_id: 1, id: 1, text:"chat 1", username: "Chat Two Name"},
    {user_id: 1, id: 2, text:"chat two", username: "Chat Two Name"}]);
