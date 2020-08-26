import React, {useEffect } from "react";
import { connect } from "react-redux";
import { getPhoto } from "../actions";

const Photo = ({ getPhoto, photo, isFetching }) => {
    useEffect( () => { getPhoto(); }, [getPhoto]);

    if(isFetching) {
        return <h2>Photo is loading...</h2>;
    };

    return (
        <div>
            <h2>Favor de mirar a las fotos al azar!</h2>
            <img src={photo} alt="random photo"></img>
            <button onClick={getPhoto}>Agara otra foto!</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        image: state.photo,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect( mapStateToProps, { getPhoto })(Photo);