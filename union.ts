{
    //많이 쓰여 Union Tyhpes: OR 이것 저것 중 한개
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction)
    }
    //자동으로 보여줘 
    move('down')

    type TileSize = 8 | 14 | 234;
    const title: TileSize =  14;

    //활용도 높아, 여러개 중 하나만 사용 할 때 
    //function login -> success, fail 

    type SuccessState = {
        response : {
            body: string;
        }
    }

    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login(): LoginState{
        return {
            response: {
                body: 'logges in '
            }
        }
    }

    function printLoginState( state: LoginState): void{
        if('response' in state){
            console.log(state.response.body)
        } else {
            console.log(`${state.reason}`)
        }
    }

}