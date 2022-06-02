import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState("Enter your text here");

    const handleToUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Counting the exact words number.
    let words = text.split(' ');
    let words_len = words.length;
    for (let i in words){
        if (words[i] == ''){
            words_len -= 1;
        }
    }

    return (
        <>
            <div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="text" rows="6" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleToUppercase}>Change to Uppercase</button>
            </div>
            <div className="container my-3">
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