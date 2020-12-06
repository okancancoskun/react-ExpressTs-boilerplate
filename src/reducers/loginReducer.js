const initialState = {
    token: null,
    user: {
        email: ""
    },
    authenticate: false,
    autheticating: false,
    error: {}
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case "LOGIN_USER_PENDING":
            return {
                ...state,
                autheticating: true
            };
        case "LOGIN_USER_DONE":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                autheticate: true,
                autheticating: false
            }
        case "LOGIN_USER_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};
export default loginReducer;
