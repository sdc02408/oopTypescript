{
    //여러가지 상수들을 모아서 사용하도록  타입이 안전하도록 
    //js 상수는 고정값 
    //ts에서 안쓰는게 좋아 이유는 타입이 보장되어 지지 않아서 
    const MAX_NUM = 5;
    const MAX_STUDENT =10;
    const MONDAY = 3;
    const TUESDAY = 4;
    const DAYS_ENUM = Object.freeze({'MONDAY': 3, 'TUESDAY': 14})
    const Days_Enum =     DAYS_ENUM.MONDAY

    //ts  정하지 않으면 0부터 시작됨, 1이면 1부터 시작, 문자열은 하나씩 넣어 줘야해 
    enum DAYS {
    MON =1,
    TUS,
    WES,
    THUR,
    FIR
    }
    console.log(DAYS.FIR)
    let day: DAYS = DAYS.FIR;
    day = 12;

}