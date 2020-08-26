const initialState = {
    loading: false,
    photo: null,
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_PHOTO_START":
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case "FETCHING_PHOTO_SUCCESS":
            return {
                ...state,
                photo: action.payload,
                isFetching: false
            };
        default:
            return state;     
    }
};