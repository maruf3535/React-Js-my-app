import React, { useState } from 'react';

function Alert(props) {
    return (
        <>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.message}
            </div>
        </>
    )
};

export default Alert;