import axios from "axios";

const login = (user = {}) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "LOGIN_USER_PENDING" })
            const res = await axios({
                method: "POST",
                url: "http://localhost:5000/login",
                data: {
                    ...user
                }
            })
            if (res.status === 200) {
                const { token, user } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user))
                dispatch({
                    type: "LOGIN_USER_DONE",
                    payload: { token, user }
                })
            }
        } catch (error) {
            dispatch({
                type: "LOGIN_USER_ERROR",
                payload: error
            })
        }
    }
}
export default login;