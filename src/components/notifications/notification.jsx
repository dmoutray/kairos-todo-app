import React from "react";

export default function Notification(props) {
    /**
     * Controlled Component which provides a drop down notification slider
     */

    return (
        <div className={'notification-container'}>
            <div className={'notification'} style={
                {
                    top: props.error.status ? '0' : '-200px',
                    transition: 'top 0.8s ease-in-out',
                }
            }>
                {props.error.message}
            </div>
        </div>
    )
}
