/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1


// type cal = {
//     count : string,
//     firstNum: number,
//     secNum: number
// }

// let count: string;
// let firstNum: number;
// let secNum: number;

// function calculate(count: string, firstNum: number, secNum: number): any{
//     console.log(count, firstNum, secNum);
//     if(count == 'add') {
//         return firstNum + secNum
//     } else if( count == "substract"){
//         return firstNum - secNum 
//     } else if( count == "multiply"){
//         return firstNum * secNum
//     } else if(count == "divide"){
//         return firstNum / secNum
//     } else if(count == "remainder"){
//         return firstNum % secNum
//     }

// }
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
function calculate(command: Command, a: number, b: number): number{
    switch(command){
        case 'add':
            return a + b;
        case 'divide':
            return a -b ;
            case 'multiply':
                return a * b;
                case 'remainder':
                    return a * b;
                    case 'substract':
                        return a % b;
                        default:
                            throw Error('unknown command')
    }
}