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
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(42);

    class User{
         
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 5;
        get age(): number{
            return this.internalAge;
        }
        set age(num: number){
            if(num < 0){

            }
            this.internalAge = num;
        }
        constructor(private firstName: string,private lastName: string){
        }
    }

    const user = new User('steve','jobs');
    console.log(user.fullName)
    user.age = 6;

}
//외부에서 접근할수 있는 것은 무엇인지 내부에서는 무엇인지 캡슐화.  