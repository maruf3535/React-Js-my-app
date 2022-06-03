import React, { useState } from 'react';

function Alert(props) {
    let styleObj = {
        'display': 'none'
    }
    const [style, setStyle] = useState(styleObj);

    if (props.alert.message == undefined) {
        console.log('undefined')
        // setStyle(styleObj);
    }
    else {
        console.log('success')
        // setStyle(Object.assign(styleObj, { display: 'block' }));
    }
    return (
        <>
            <div className={`alert alert-${props.alert.type}`} role="alert" style={style}>
                {props.alert.message}
            </div>
        </>
    )
};

export default Alert;