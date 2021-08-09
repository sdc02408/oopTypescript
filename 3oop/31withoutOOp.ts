{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    const BEANS_GRAMM_PER_SHOT:number = 7;
    let conffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup{
        if(conffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('not enout coffee beans')
        } 
        conffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots: shots,
            hasMilk: false,
        }

    }

    conffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee)
}