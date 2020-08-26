const initialState = {
    loading: false, 
    image: null,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_IMAGE_START":
            return {
                ...state, 
                isFetching: true,
                error: ""
            };
        case "FETCHING_IMAGE_SUCCESS":
            return {
                ...state,
                image: action.payload,
                isFetching: false
            };
        default:
            return state;
    };
};