import axios from "axios";

const postDetail = (title) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "GET_POST_DETAIL_PENDING"
            })
            const res = await axios.get(`http://localhost:5000/post/${title}`);
            dispatch({
                type: "GET_POST_DETAIL_DONE",
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: "GET_POST_DETAIL_ERROR",
                payload: error
            })
        }
    }
}

export default postDetail;