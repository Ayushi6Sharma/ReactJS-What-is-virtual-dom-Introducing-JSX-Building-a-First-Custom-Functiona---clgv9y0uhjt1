// write code for Welcome component here
import React from "react";
export default function Welcome(props)
{  
   
    return(
    <>
       <div>Hey !<h1>{props.name}</h1></div>
        <h2>Welcome to Newton School.</h2>
    </>
    );
    
}
