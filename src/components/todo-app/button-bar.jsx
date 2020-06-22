import React from "react";

import Check from "../../images/icon-check.png"
import Delete from "../../images/icon-delete.png"
import Edit from "../../images/icon-edit.png"


export function ButtonBar(props) {

    /**
     * Controlled component which provides the edit and delete buttons
     */

    const {todoItemKey, handleEditItem, handleDeleteItem, handleSetCompleted} = props

    return (
        <div className='button-bar'>
            <img data-key={todoItemKey}
                 onClick={handleSetCompleted}
                 src={Check}
                 alt='complete'
            />
            <img data-key={todoItemKey}
                 onClick={handleEditItem}
                 src={Edit}
                 alt='edit'/>
            <img data-key={todoItemKey}
                 onClick={handleDeleteItem}
                 src={Delete}
                 alt='delete'
            />
        </div>
    )
}
