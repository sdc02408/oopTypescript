{
    //타입 강요 type assertions 별로 좋지 않아
    function jsStrFunc() : any {
        return 'hello';
    }

    const result = jsStrFunc();
    
    console.log((result as string).length)
    //result가  string라는것을 확실히 알고 있어
}