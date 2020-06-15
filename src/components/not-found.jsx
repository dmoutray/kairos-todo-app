import React from "react";

function takeMeHome() {
    /**
     * Redirect the user back to the login page.
     */

    setTimeout(function () {
        window.location.hash = '/'
    }, 3000)
}

export default function NotFound() {
    return (
        <div className='not-found'>
            <h1>404 Page Not Found <span>🤷</span></h1>
            <h3>redirecting...</h3>
            {takeMeHome()}
        </div>
    )
}
