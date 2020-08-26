import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhoto } from "../actions";

const Photo = ({ getPhoto, photo, isFetching }) => {
    useEffect(() => {
        getPhoto();
    }, [getPhoto]);

    if(isFetching) {
        return <h2>Image is loading...</h2>;
    };

    return (
        <div>
            <h2>Random Photos from Unsplash</h2>
            <div className="photo-wrapper">
                <img width="200" height="300" src={photo} alt="unsplash photography sample"></img>
            </div>
            <div className="button-wrapper">
                <button className="change-photo-button" onClick={getPhoto}>Change 
                Photo</button>
            </div>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        photo: state.photo,
        isFetching: state.isFetching,
        error: state.error,
        // dogBreed: state.dogBreed // search change 
    };
};

export default connect(
    mapStateToProps,
    { getPhoto }
)(Photo);