import React from "react";

export default function Modal(props) {

    /**
     * Component which appears as a top layer modal used for editing existing todo items
     */

    const {edit, handleEdit, handleResetEditState, handleUpdateItem} = props

    return (

        <div className={'modal'} hidden={!edit.status}>
            <div className={'modal-body'}>
                <div className='todo-form'>
                    <input type='text' data-key='message' value={edit.message}
                           onChange={handleUpdateItem}/>
                    <input type='date' data-key='dateValue' value={edit.dateValue}
                           onChange={handleUpdateItem}/>
                    <button className={'button primary'} onClick={handleEdit}>
                        Edit todo
                    </button>
                </div>
                <button onClick={handleResetEditState}>CANCEL
                </button>
            </div>
        </div>
    )

}


