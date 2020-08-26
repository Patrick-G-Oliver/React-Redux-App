import axios from "axios";

export const FETCHING_PHOTO_START = "FETCHING_PHOTO-START";
export const FETCHING_PHOTO_SUCCESS = "FETCHING_PHOTO-SUCCESS";
export const FETCHING_PHOTO_FAILURE = "FETCHING_PHOTO-FAILURE";

export const getPhoto = () => dispatch => {
    dispatch({ type: FETCHING_PHOTO_START });
    axios 
        .get("https://picsum.photos/200/300")
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_PHOTO_SUCCESS, payload: res.data.message })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCHING_IMAGE_FAILURE,
                payload: err.response.message
            });
        });
};
