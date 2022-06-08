import React, { useState } from 'react';

function Alert(props) {
    return (
        <>
            <div style={{height: '45px'}}>
                <div className={`alert alert-${props.alert.type}`} role="alert">
                    {props.alert.message}
                </div>
            </div>
        </>
    )
};

export default Alert;