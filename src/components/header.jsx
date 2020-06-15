import React from "react";

import {useHistory} from "react-router-dom"

export default function Header(props) {

    /**
     * Controlled component which provides a web page header
     */

    const reactHistory = useHistory()

    return (
        <div className='header'>
            <div>Todo App</div>
            <div>{'Welcome, ' + props.userName}
                <button className={'button primary'} onClick={
                    function () {
                        sessionStorage.setItem('userName', '')
                        reactHistory.push('/login')
                    }
                }>Logout
                </button>
            </div>
        </div>
    )
}
