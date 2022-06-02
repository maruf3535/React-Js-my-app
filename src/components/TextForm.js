import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState("Enter your text here");

    const handleToUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Example textarea</label>
                <textarea className="form-control" id="text" rows="6" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleToUppercase}>Change to Uppercase</button>
        </div>
    )
}
