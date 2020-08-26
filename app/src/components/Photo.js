import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhoto } from "../actions";

const Photo = ({ getPhoto, photo, isFetching, error }) => {
    useEffect(() => {
        getPhoto();
    }, [getPhoto]);

    if(isFetching) {
        return <h2>Image is loading...</h2>;
    }

    return (
        <div>
            <h2>Look, a random dog!</h2>
            <img className="dogImg" src={photo} alt="a random dog"></img>
            <button className="imgButton" onClick={getPhoto}>See another random dog!</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        photo: state.photo,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getPhoto }
)(Photo);