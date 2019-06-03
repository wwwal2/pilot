const reducerOne = (state = {}, action) => {
    switch (action.type) {
        case 'ACTION_ONE':
            return { result: action.payload }
        default:
            return state;
    }
}

export default reducerOne;