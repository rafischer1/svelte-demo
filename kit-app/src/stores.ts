import { writable } from 'svelte/store';


export const games = writable([{id: 1, teamHome: "Real Madrid",
    teamAway: "Real Betis", minute: 0, scoreHome: 0, scoreAway: 0, live: false},
    {id: 2, teamHome: "Barcelona", teamAway: "Español",
        minute: 0, scoreHome: 0, scoreAway: 0, live: true},
    {id: 3, teamHome: "Celta Vigo", teamAway: "Real Sociedad",
        minute: 23, scoreHome: 2, scoreAway: 1, live: false}]);
