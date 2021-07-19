{
    //모든 것을 다 합한 것 and 
    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        empolyeeId: number;
        work: ()=> void;
    }

    function interWork(person: Student & Worker){
        console.log(person.name, person.empolyeeId, person.work())
    }

    // 다 해줘야해 다양한 타입을 묶어서 선언
    interWork({
        name:'yang',
        score:1,
        empolyeeId: 1234,
        work: () => {}
    })
}