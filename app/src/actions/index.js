import axios from "axios";

export const FETCHING_PHOTO_START = "FETCHING_PHOTO_START";
export const FETCHING_PHOTO_SUCCESS = "FETCHING_PHOTO_SUCCESS";
export const FETCHING_PHOTO_FAILURE = "FETCHING_PHOTO_FAILURE";

export const getPhoto = () => dispatch => {
    dispatch({ type: "FETCHING-PHOTO-START" });
    axios
        // .get("https://dog.ceo/api/breed/pug/images/random")
        .get("https://picsum.photos/200/300")
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_PHOTO_SUCCESS, payload: res.config.url})
            // dispatch({ type: FETCHING_PHOTO_SUCCESS, payload: res.data.message})
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCHING_PHOTO_FAILURE,
                payload: err.response.message
            });
        });
};