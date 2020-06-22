import React from "react";

import {useHistory} from "react-router-dom"

export default function Header(props) {

    /**
     * Controlled component which provides a web page header
     */

    const reactHistory = useHistory()

    return (
        <div className='header'>
            <div><h1>Todo App</h1></div>
            <div>{'Welcome, ' + props.userName}
            </div>
        </div>
    )
}
