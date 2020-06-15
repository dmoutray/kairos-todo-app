import React from "react";

export default function TodoForm(props) {

    const {message, dateValue, handleAddItem, handleChange} = props

    return (
        <div className='todo-form'>
            <input type='text' data-key='message' value={message} onChange={handleChange} placeholder={`Add your todo here`}/>
            <input type='date' data-key='dateValue' value={dateValue} onChange={handleChange}/>
            <button className={'button primary'} onClick={handleAddItem}>Add todo</button>
        </div>
    )
}
