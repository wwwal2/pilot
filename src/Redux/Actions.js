const actionOne = () => (dispatch) => {
    dispatch({
        type: "ACTION_ONE",
        payload: "The_action_itself"
    })
}

export default actionOne;