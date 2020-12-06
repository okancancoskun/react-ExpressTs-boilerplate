import axios from "axios";

const addPost = (title, text, token) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: "ADD_POST_PENDING"
            })
            dispatch({
                type: "ADD_POST_DONE",
                payload: await axios({
                    method: 'post',
                    url: 'http://localhost:5000/add-post',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        title: title,
                        text: text
                    }
                })
            })
        } catch (error) {
            dispatch({
                type: "ADD_POST_ERROR",
                payload: error
            })
        }
    }
}
export default addPost;