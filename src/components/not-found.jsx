import React from "react";

function takeMeHome(){
    setTimeout(function(){
        window.location.hash = '/'
    }, 3000)
}

export default function NotFound(){
    return (
        <div style={{
            position: 'relative',
            width: '50vw',
            margin: '0 auto',
            top: '25vh',
            textAlign: 'center'
        }}><h1>Page Not Found 🤷</h1>
        <h3>redirecting...</h3>
            {takeMeHome()}
        </div>
    )
}
