{
    // //javascript no
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }

    // //typescript good
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // //ts
    // function jsFetchNum(id: string): Promise<number>{
    //     return new Promise((resoleve, reject) => {
    //         resoleve(100);
    //     })
    // }
    //optional parameter
    //? 는 전달 받을 수도 있고 안 받을 수도 있다 .
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName)//undefined 이 가능하지만 
    }
    printName('sete','dfdf')

    //default parameter
    function printMessage(message: string = 'default message'){
        console.log(message); //디폴트 값이 있어
    }
    printMessage()

    //rest parameter
    //갯수 상관 없이 데이터 타입만
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a,b) => a + b)
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3));
    console.log(addNumbers(1,2,4,5));



}