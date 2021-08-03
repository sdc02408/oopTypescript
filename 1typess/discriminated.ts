{
  //직관적 가능. 차별화 result 라는 공통적 속성을 같은음로써 편하다
    type SuccessState = {
        result: 'success';
        response : {
            body: string;
        }
    }

    type FailState = {
        result: 'fail'
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    // function login(): LoginState{
    //     return {
    //         result:'success',
    //         response: {
    //             body: 'logges in ',
    //         }
    //     }
    // }

    // function printLoginState( state: LoginState): void{
    //     if(state.result ==='success'){
    //         console.log(state.response.body)
    //     } else {
    //         console.log(`${state.reason}`)
    //     }
    // }

}