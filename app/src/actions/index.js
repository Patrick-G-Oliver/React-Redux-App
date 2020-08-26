import axios from "axios";

export const FETCHING_PHOTO_START = "FETCHING_PHOTO_START";
export const FETCHING_PHOTO_SUCCESS = "FETCHING_PHOTO_SUCCESS";
export const FETCHING_PHOTO_FAILURE = "FETCHING_PHOTO_FAILURE";

export const getPhoto = () => dispatch => {
    dispatch({ type: FETCHING_PHOTO_START });
    axios
        // .get("https://picsum.photos/200/300")
        //.get("https://dog.ceo/api/breed/hound/images/random")
        .get("https://source.unsplash.com/random")
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_PHOTO_SUCCESS, payload: res.config.url})
            //dispatch({ type: FETCHING_PHOTO_SUCCESS, payload: res.data.message})
            //dispatch({ type: FETCHING_PHOTO_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCHING_PHOTO_FAILURE,
                //payload: err.response.message
                payload: err
            });
        });
};