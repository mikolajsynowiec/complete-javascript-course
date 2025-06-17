'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;

const [gk, ...fieldPlayers] = player1;

const allPlayers = [...player1, ...player2];

const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

const printGoals = function (...players) {
  //console.log(`These players scored goals today: ${players}`);
};

printGoals(game.scored);

//team1 < team2 && console.log('Team one is more likely to win');

for (const [goal, player] of Object.entries(game.scored)) {
  console.log(`${player} scored goal number ${goal}.`);
}

for (const [x, y] of Object.entries(game.odds)) {
  const outcome = x === 'x' ? 'draw' : `victory ${game[x]}`;
  console.log(`Odd of ${outcome}: ${y}`);
}

let sum = 0;

for (const x of Object.values(game.odds)) {
  sum += x;
}

console.log(`Average odds are ${sum / 3}`);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const newSet = new Set();

for (const [key, value] of gameEvents) {
  newSet.add(value);
}

const events = [...newSet];

console.log(events);

events.splice(2, 1);

console.log(events);

const eventsTwo = [];

for (const event of gameEvents) {
  eventsTwo.push(event);
}

const average = 90 / eventsTwo.length;

console.log(`An Event happend, on average, every ${average} minute`);

for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`First half ${(key, value)}`);
  } else {
    console.log(`Second Half ${(key, value)}`);
  }
}
