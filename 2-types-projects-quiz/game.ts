/**
 * Let's make a game 🕹
 */
// console.log(position); // { x: 0, y: 0}
// move('up');
// console.log(position); // { x: 0, y: 1}
// move('down');
// console.log(position); // { x: 0, y: 0}
// move('left');
// console.log(position); // { x: -1, y: 0}
// move('right');
// console.log(position); // { x: 0, y: 0}

type Move ='up' | 'down' | 'left' | 'right'
function move(moves: Move, a = 0, b =0): any{
    switch(moves){
        case 'up':
            return a, b+1;
        case 'down':
            return a, b-1;
        case 'left':
            return a - 1 , b;
        case 'right':
            return a + 1, b;
    }
}

move('up')