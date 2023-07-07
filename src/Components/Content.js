import React, {useState} from 'react';
import TextArea from './TextArea';


export const Content = () => {
    const[mode,setMode]=useState('light');
    const[check,setCheck]=useState('dark');

    const toggle=()=>{
        if(mode==='dark')
        {
            setMode('light');
            setCheck('dark');
            document.body.style.backgroundColor="white";
        }
        
        else
        {   
            setMode('dark');
            setCheck('light');
            document.body.style.backgroundColor='#3d444b';
            document.body.style.Color="white";
        }
    }
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${mode==='light'?'primary':'dark'}`} >
            <div className="container-fluid">
                <a className="navbar-brand mg mx-3" href="/">Text Sculptor</a>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="button" id="flexSwitchCheckDefault" onClick={toggle}/>
                    <label className="form-check-label mx-1 text-light" for="flexSwitchCheckDefault" >Enable {check} mode</label>
                </div>
            </div>
        </nav>
        <div className='container mh-100'>
            <div className=' my-5 '>
                <TextArea color={mode}/>
            </div>
        </div>
    </>
  )
}
