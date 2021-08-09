{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT:number = 7; // class level 변하지 않는 것. 
    conffeeBeans: number = 0; // instance level
    

    //클래스를 가지고 인스턴스를 만들 때 호출됨 처음에 호출되는 함수 
    constructor(coffeeBeans: number){
        this.conffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup{
        if(this.conffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
            throw new Error('not enout coffee beans')
        } 
        this.conffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        return {
            shots: shots,
            hasMilk: false,
        }

    }
    }

    //class 를 이용해 인스턴스를 만들어 
    const maker = new CoffeeMaker(32);
    console.log(maker)
    const maker2 = new CoffeeMaker(14)
    console.log(maker2)
}