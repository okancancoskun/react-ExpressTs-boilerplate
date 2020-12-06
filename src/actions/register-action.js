import axios from "axios";

const register = (user = {}) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "REGISTER_USER_PENDING"
            })
            dispatch({
                type: "REGISTER_USER_DONE",
                payload: await axios({
                    method: "POST",
                    url: "http://localhost:5000/register",
                    data: {
                        ...user
                    }
                })
            })
        } catch (error) {
            dispatch({
                type: "REGISTER_USER_ERROR",
                payload: error
            })
        }

    }
}
export default register;