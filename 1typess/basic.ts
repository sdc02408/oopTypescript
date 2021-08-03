{
    //javascript

    //var은 호이스팅과 여러가지 문제 때문에 쓰지마
    
    //let 
    let name = 'hello';
    name = 'hi';


    // const
    const age = 5;
    // age = 5;


    //primitive(원시 타입): number, string, boolean , bigint, symbol, null, undefined
    //object : function, array....

    //number
    const num: number = 33.3

    //string
    const str: string = '32423'

    //boolean
    const boal: boolean = true;

    //undefined
    // 값이 잇는지 없는지 결정되지 않은 상태
    //보편적 
    let names: number | undefined;
    names  = 324;
    names = undefined;

    //있고 없을 때 
    function find() : number | undefined{
        return undefined
    }

    //null
    // 여기에는 텅텅 비어져 있다.
    let person: string | null;
    person = '3434';
    person = null 

    //unknown  안쓰는게 좋아   X
    let notSure: unknown = 0;
    notSure = 'hwer';
    notSure = true;

    //any  안쓰는게 좋아  X
    let anything: any = 0;
    anything = 0;
    anything = 'anyayayay'

    //void
    function print(): void {
        console.log('hjihih')
        return; 
        //이게 생략 된거야 
    }

    //never
    function throwError(message: string): never{
        //message -> ser
        throw new Error(message)
    }

    //object  not good 
    let obj: object;
    function accetSomeObject(obj: object){}
    accetSomeObject({dfname: 'ell'})
    accetSomeObject({animal: 'dogg'})

    


}