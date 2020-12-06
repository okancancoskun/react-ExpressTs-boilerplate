const initialState = {
    post: {
        fetching: false
    },

}

const postDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POST_DETAIL_PENDING":
            return {
                ...state,
                post: {
                    fetching: true
                }
            }

        case "GET_POST_DETAIL_DONE":
            return {
                ...state,
                post: {
                    ...action.payload,
                    fetching: false
                }
            }
        case "GET_POST_DETAIL_ERROR":
            return {
                ...state,
                post: {
                    fetching: false
                }
            }
        default:
            return state;
    }
}
export default postDetailReducer;