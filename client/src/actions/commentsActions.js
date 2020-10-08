export const getCommentsRequest = () => {
  return {
    type: "GET_COMMENTS_REQUEST",
  };
};

export const getCommentsSuccess = (comments) => {
  return {
    type: "GET_COMMENTS_SUCCESS",
    payload: comments,
  };
};

export const getCommentsFailure = (error) => {
  return {
    type: "GET_COMMENTS_FAILURE",
    payload: error,
  };
};
