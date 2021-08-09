{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    //public 공개적, 
    //private   외부에서 볼 수 없고, 접근 불가
    //protected   상속시 외부에서 접근 불가 상속받은 자식은 접근 가능. 
    class CoffeeMaker {
    //private 외부에서 보이지 않아
    private static BEANS_GRAMM_PER_SHOT:number = 7; // class level 변하지 않는 것. 
    private conffeeBeans: number = 0; // instance level
    

    //클래스를 가지고 인스턴스를 만들 때 호출됨 처음에 호출되는 함수 
    private constructor(coffeeBeans: number){
        this.conffeeBeans = coffeeBeans;
    }

    
    static makeMachine(conffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(conffeeBeans)
    }

    //외부에서 변경 할 수 있도록 
    fillCoffeeBeans(beans: number){
        if(beans < 0){
            throw new Error('value ofr beans should be greater than 0')
        }
        this.conffeeBeans += beans;
    }

    grindBeans(shots: number){
        console.log(`grindging beans for ${shots}`);
        if(this.conffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
            throw new Error('not enough coffee beans')
        }
        this.conffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
    
    }

    preheat(): void{
        console.log('heating up')
    }

    extract(shots: number): CoffeeCup{
        console.log(`pulling ${shots} shots... `)
        return {
            shots, 
            hasMilk: false;
        }
    }
    makeCoffee(shots: number): CoffeeCup{
    this.grindBeans(shots);
    this.preheat();
    return this.extract(shots);
        //     if(this.conffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
    //         throw new Error('not enout coffee beans')
    //     } 
    //     this.conffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    //     return {
    //         shots: shots,
    //         hasMilk: false,
    //     }

    // }
    }

    //class 를 이용해 인스턴스를 만들어 
    const maker = CoffeeMaker.makeMachine(32);
    


}
