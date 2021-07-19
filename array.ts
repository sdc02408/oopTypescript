{
    //array 1번 선호 
    const fruits: string[] = ['to', 'bana'];
    const scores: Array<number> = [1,2,3];
    
    //fruits는 데이터 변경 불가능 유일한 차이 
    function printArray(fruits: readonly string[]){

    }

    //Tuple 서로 다른 타입을 같이 갖을 수 있어   권장하지 않아 .  [0] 이런거 권장하지 않아
    //intergace 나 type alias class로 사용
    let student: [string, number]
    student = ['name', 123]
    student[0] //name
    const [name, age] = student;

}