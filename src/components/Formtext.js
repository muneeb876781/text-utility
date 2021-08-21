import React, {useState} from 'react';



export default function Formtext(props) {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handledownclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClear = () => {
        setText("")
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
    }
    const handleonchange = (event) => {
        console.log('you have clicked on handle on chamge');
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style = {{color: props.mode==="light"?"black":"white"}}>
            <h2>{props.heading}</h2>
            <div className="my-3">
            <textarea className="form-control" placeholder= "type here" value = {text} onChange = {handleonchange} style = {{backgroundColor: props.mode==="light"?"white":"#842743", color: props.mode==="light"?"black":"white", border: props.mode==="light"?"2px solid black":"2px solid white"}} id="mybox" rows="8"></textarea>
            </div>
            <button className="b btn btn-primary mx-2 my-2" style = {{color: props.mode==="light"?"black":"white", border: props.mode==="light"?"2px solid black":"2px solid white"}} onClick = {handleupclick} >convert to uppercase</button>
            <button className="b btn btn-primary mx-2 my-2" style = {{color: props.mode==="light"?"black":"white", border: props.mode==="light"?"2px solid black":"2px solid white"}} onClick = {handledownclick}>convert to lowercase</button>
            <button className="b btn btn-primary mx-2 my-2" style = {{color: props.mode==="light"?"black":"white", border: props.mode==="light"?"2px solid black":"2px solid white"}} onClick = {handleCopy}>copytext</button>
            <button className="b btn btn-primary mx-2 my-2" style = {{color: props.mode==="light"?"black":"white", border: props.mode==="light"?"2px solid black":"2px solid white"}} onClick = {handleExtraSpaces}>remove extra spaces</button>
            <button className="b btn btn-primary mx-2 my-2" style = {{color: props.mode==="light"?"black":"white", border: props.mode==="light"?"2px solid black":"2px solid white"}} onClick = {handleClear}>clear</button>

        </div>
        <div className="container my-4" style = {{color: props.mode==="light"?"black":"white"}}>
            <h2>Your text summary</h2>
            <p>words: {text.length===0?0:text.split(" ").length} charactors: {text.length}</p>
            <p>you need {0.008 * text.split(" ").length-1} minutes to read this text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in the textbox above to preview it here"}</p>

        </div>
        
        </>
    )
}
