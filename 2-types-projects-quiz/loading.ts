{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;


  function printLoginState(message: ResourceLoadState): void {
    if(message.state == 'loading'){
      console.log('👀 loading...')
    } else if (message.state == 'success'){
      console.log(message.response.body)
    } else if (message.state == 'fail'){
        console.log(message.reason)
    }
  }


  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
