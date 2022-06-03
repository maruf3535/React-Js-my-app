import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Handle to change the text into uppercase function.
    const [text, setText] = useState("Enter your text here");  // create an State
    const handleToUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // Counting the exact words number.
    let words = text.split(' ');
    let words_len = words.length;
    for (let i in words) {
        if (words[i] == '') {
            words_len -= 1;
        }
    }

    // Select and copy text from textbox in clipboaerd funciton.
    const copyText = () => {
        document.getElementById('textBox').select();
        document.execCommand('copy');
    };



    const darkStyle = {
        'backgroundColor': 'rgb(48 95 93)',
        'color': 'white'
    };
    const lightStyle = {
        'backgroundColor': 'white',
        'color': 'black'
    };

    return (
        <>
            <div className='container mb-3'>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label"><b>Textarea</b></label>
                    <textarea className="form-control" id="textBox" rows="6" value={text} onChange={handleOnChange} style={props.mode === 'dark' ? darkStyle : lightStyle}></textarea>
                </div>
                <button className="btn btn-dark me-3" onClick={handleToUppercase}>Change to Uppercase</button>
                <button className="btn btn-dark me-3" onClick={copyText}>Copy Text</button>
                {/* <button className="btn btn-dark me-3" onClick={props.mode}>Enable Drak Mode</button> */}
            </div>
            <div className="container pt-4 pb-2">
                <h4>Your Text Summmary</h4>
                <p className="fs-6">
                    <b> {words_len} </b>
                    Words and
                    <b> {text.length} </b>
                    Characters
                </p>
            </div>
        </>
    )
}