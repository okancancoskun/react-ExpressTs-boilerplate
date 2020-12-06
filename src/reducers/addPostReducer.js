const initialState = {
    fething: true,
    done: false,
    error: {}
}
const addPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST_PENDING":
            return {
                ...state,
                fetching: true

            }
        case "ADD_POST_DONE":
            return {
                ...state,
                fetching: false,
                done: true,

            }
        case "ADD_POST_ERRORW":
            return {
                ...state,
                fetching: true,
                error: action.payload
            }
        default:
            return state;
    }
}

export default addPostReducer;