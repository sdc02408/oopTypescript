//type inference

let text: string = 'hello';
text = 'fsdf'
function print(message = 'hi'){
    console.log(message)
}

function add(x: number, y: number): number {
    return x + y;
}

const result = add(1,2)

//타입추론 별로
