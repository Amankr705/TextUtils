import React, {useState} from 'react'


export default function Textform(props) {



    const handleUpClick = ()=> {
        // console.log('Uppercase was clicked: ' + text);
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleOnChange = (event)=> {
        // console.log('On change');
        setText(event.target.value);
    }

    const handleClrClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        <text className="Select"></text>
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to the clipboard! ", "success");
    }
        
    const [text, setText] = useState('');
    // text = 'new text' ; wrong way to change the state
    // setText('new text'); correct way to change the text

    return ( 
       <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8" ></textarea>  
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element) => {return element.length!==0} ).length} words and {text.length} characters and {text.split(".").length} sentences</p>
            <p>{0.008 * text.split(" ").filter((element) => { return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"} </p>
        </div>
       </> 
    )
}
