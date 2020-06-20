import React from "react";


export function EditButtons(props) {

    /**
     * Controlled component which provides the edit and delete buttons
     */

    const {rowKey, handleEditItem, handleDeleteItem} = props

    return (
        <div className='button-bar'>
            <div className={'image-button'}
                 data-key={rowKey}
                 onClick={handleEditItem}
            > edit
            </div>
            <div className={'image-button'}
                 data-key={rowKey}
                 onClick={handleDeleteItem}
            > delete
            </div>
        </div>
    )
}
