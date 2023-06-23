import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleloClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handlereplaceClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.replace(text, "HELLO")
    setText(newText)
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value)

  }

  const [text, setText] = useState('');
  // text = "new text" //wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return(
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handlereplaceClick}>Replace the String</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
