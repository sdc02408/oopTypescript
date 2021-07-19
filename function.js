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
    function printName(firstName, lastName) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('sete', 'dfdf');
}
