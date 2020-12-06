const initialState = {
  fetching: false,
  fetched: false,
  postList: [],
  error: {}
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_PENDING":
      return {
        ...state,
        fetching: true
      };
    case "GET_POST_DONE":
      return {
        ...state,
        fetching: false,
        fethced: true,
        postList: action.payload
      };
    case "GET_POST_ERROR":
      return {
        ...state,
        error: action.payload,
        fetching: false
      }

    default:
      return state;
  }
}

export default postReducer;