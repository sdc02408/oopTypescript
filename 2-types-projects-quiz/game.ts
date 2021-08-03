/**
 * Let's make a game 🕹
 */

const position = {x: 0, y: 0};

function move(direction : 'up' | 'down' | 'left' | 'right'){
    switch(direction){
        case 'up':
            position.y +=1;
            break;
        case 'down':
            position.y -=1;
            break;
        case 'left':
            position.x -=1;
            break;
        case 'right':
            position.x +=1;
            break;
        default:
            throw new Error(`error : ${direction}`)
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

// type Move ='up' | 'down' | 'left' | 'right'
// function move(moves: Move, a = 0, b = 0): any{
//     if(moves === 'up'){
//         return a, b+1
//     } else if (moves === 'down'){
//         return a, b-1
//     } else if(moves === 'left'){
//         return a-1 , b;
//     } else if (moves === 'right'){
//         return a+1, b;
//     }
// }

// move('up')