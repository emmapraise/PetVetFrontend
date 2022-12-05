import React from "react";
import ReactLoading from "react-loading"
import PropTypes from 'prop-types';

export default function Loading(){
    return (
    <ReactLoading type="bubbles" height={250} width={250} className="orange" color="#FB8000"/>
    )
}