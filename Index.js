import React from 'react';
import './Index.css'

const Index = () => {
    return (
        <>
        <div className='header'>
            LOG-IN 
        </div> 
        <div className='name'>
           {/*  {/* <div id="hero"> LOG-IN  </div><p>  */}<p>
             Enter your name : 
            <input type='text '></input>
            Enter your password :
            <input type='text' /></p>

        </div>
        
            <button type='submit' value='Submit' id='submit'>Submit</button>
        
         
        </>
    );
};

export default Index;