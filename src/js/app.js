import Character from './domain';

import Bowerman from './bowerman';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Zombie from './zombie';

console.log('app worked');

console.log(Character);

const bowerman = new Bowerman('player1', 'Bowerman');
console.log(bowerman);
const daemon = new Daemon('player2', 'Daemon');
console.log(daemon);
const magician = new Magician('player3', 'Magician');
console.log(magician);
const swordsman = new Swordsman('player4', 'Swordsman');
console.log(swordsman);
const undead = new Undead('player5', 'Undead');
console.log(undead);
const zombie = new Zombie('player6', 'Zombie');
console.log(zombie);
