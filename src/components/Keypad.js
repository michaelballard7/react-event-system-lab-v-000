// Code Keypad Component Here
import React from 'react'


function Keypad(){
    return(
        <input onKeyUP={()=>console.log('Entering Password')} />
    )
}


export default Keypad;