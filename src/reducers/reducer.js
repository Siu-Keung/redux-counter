
export default (currentState = [0, 0], action) => {
    let newState = [...currentState];
    switch(action.type){
        case 'ADD':
            newState[action.index]++;
            return newState;
        case 'SUB':
            newState[action.index]--;
            return newState;
        default:
            return currentState;
    }

}