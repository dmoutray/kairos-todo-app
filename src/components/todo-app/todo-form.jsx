import React from "react";

export default function TodoForm(props) {

    /**
     * Controlled component which provides the add todo item form
     */

    const {message, dateValue, handleAddItem, handleChange} = props

    return (
        <div className='todo-form'>
            <h2>Add a todo item</h2>
            <input type='text' data-key='message' value={message} onChange={handleChange} placeholder={`Add your todo here`}/>
            <input type='date' data-key='dateValue' value={dateValue} onChange={handleChange}/>
            <div><button className={'button primary'} onClick={handleAddItem}>Add</button></div>
        </div>
    )
}
