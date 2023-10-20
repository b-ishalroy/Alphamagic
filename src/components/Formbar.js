import React, { useState } from 'react'
export default function Formbar(props) {

    // use state function for all 
    const [textMode, setTextMode] = useState("");
    // for text area 
    const onclick = (event) => {
        setTextMode(event.target.value)
    }
    // for up case 
    const upclick = () => {
        let newupText = textMode.toUpperCase();
        setTextMode(newupText)
        props.showAlert(" Upper-Case Enabled", "Success")
        document.title = "Alphamagic - Upper-Case"
    }
    // for lower case 
    const lowclick = () => {
        let newlowText = textMode.toLowerCase();
        setTextMode(newlowText)
        props.showAlert(" Lower-Case Enabled", "Success")
        document.title = "Alphamagic - Lower-Case"
    }
    // for copy Clipboard 
    const copyClipboard = () => {
        navigator.clipboard.writeText(textMode)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
        props.showAlert(" Copy-Clipboard Enabled", "Success")
        document.title = "Alphamagic - Copied to clipboard!"
    }
    // for erase text 
    const eraseText = () => {
        let clearText = " text - 1 ";
        setTextMode(clearText.toString())
        props.showAlert(" Erase Enabled", "Success")
        document.title = "Alphamagic - Erase-Sucess"
    }
    // for colour 
    // for textarea backgroundColor 
    const textAreaBackground = props.mode.backgroundColor === "white" ? { backgroundColor: "#ABB4C1" } : { backgroundColor: "#92B4E8" }

    return (
        <div className="m-5">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" > <b style={props.mode}>Write Your Content</b></label>
            <textarea className="form-control" value={textMode} onChange={onclick} id="exampleFormControlTextarea1" rows="3" style={textAreaBackground} ></textarea>

            <br />
            <button onClick={upclick}>UPPER CONVERT</button>
            <button onClick={lowclick}>LOWER CONVERT</button>
            <button onClick={copyClipboard}>COPY CLIPBOARD</button>
            <button onClick={eraseText}>Erase Text</button>



            <div className="container my-3" style={props.mode}>
                <h1>Text Summary</h1>   <hr />
                <b> <p> {textMode.length} characters </p></b>
                <b> <p>{textMode.split(" ").length - 1} Words</p></b>
            </div>

        </div>

    )
}
