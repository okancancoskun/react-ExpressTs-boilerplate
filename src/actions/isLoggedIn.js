const isLoggedIn = () => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const user = JSON.parse(localStorage.getItem('user'));

                dispatch({
                    type: 'LOGIN_USER_DONE',
                    payload: { token, user }
                })
            }
        } catch (error) {
            dispatch({
                type: 'LOGIN_USER_ERROR',
                payload: error
            })
        }

    }
}
export default isLoggedIn;