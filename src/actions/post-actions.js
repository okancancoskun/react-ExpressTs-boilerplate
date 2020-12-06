import axios from "axios"
export const getPosts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:5000/posts');
            dispatch({
                type: "GET_POST_PENDING"
            })

            dispatch({
                type: "GET_POST_DONE",
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: "GET_POST_ERROR",
                payload: error
            })
        }
    }
}

export default getPosts