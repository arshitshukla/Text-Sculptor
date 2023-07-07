import React, { useState } from 'react'

export default function TextArea(props) {

  const UPPERCASE= ()=>{
      setText(text.toUpperCase());
  }

  const paste= ()=>{
    navigator.clipboard.readText()
    .then((clipText) => setText(text+clipText));
  }

  const lowercase= ()=>{
    setText(text.toLowerCase());
  }

  const speak= ()=>{
    let msg=new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
  }

  function firstLetterUpper(theString) {
    var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return newString;
  }
  function convertToSentenceCase() {
    var theString = text;
    var newString = firstLetterUpper(theString);
    setText(newString);
  }

  const clear=()=>{
    setText("");
  }

  const copy= ()=>{
    navigator.clipboard.writeText(text);
  }

  const funcOnChange= (event)=>{
      setText(event.target.value);
  }

  const[text,setText]=useState("");

  return (
    <>
      <div className={`mb-3 text-${props.color==='dark'?'light':'dark'}`}>
        <label for="Text-Area" className="form-label mx-2" ><h5>Enter your Text here to scultpture it according to your needs : </h5></label>
        <textarea className="form-control" value={text} onChange={funcOnChange} id="Text-Area" rows="10" placeholder='Start Typing.....' data-bs-theme={props.color}></textarea>
      </div>

      <btn className={`btn btn-${props.color==='light'?'primary':'dark'} mx-2 my-2`} onClick={UPPERCASE}>Convert to UPPERCASE</btn>
      <btn className={`btn btn-${props.color==='light'?'primary':'dark'} mx-2 my-2`} onClick={lowercase}>Convert to lowercase</btn>
      <btn className={`btn btn-${props.color==='light'?'primary':'dark'} mx-2 my-2`} onClick={convertToSentenceCase}>Capitalize sentence starting</btn>
      <btn className={`btn btn-${props.color==='light'?'primary':'dark'} mx-2 my-2`} onClick={speak}>Read Text</btn>
      <btn className={`btn btn-${props.color==='light'?'primary':'dark'} mx-2 my-2`} onClick={copy}>Copy All Text</btn>
      <btn className={`btn btn-${props.color==='light'?'primary':'dark'} mx-2 my-2`} onClick={paste}>Paste</btn>
      <btn className={`btn btn-${props.color==='light'?'primary':'dark'} mx-2 my-2`} onClick={clear}>Clear</btn>

      <div className={`container my-4 text-${props.color==='dark'?'light':'dark'}`}>
        <b>
          <h4>Number of Words and Characters : </h4>
          <p className='mx-4'>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words<br/>{text.length} Characters</p>
        </b>
      </div>
    </>   
  );
}