import check from "../../images/tick-icon.png";
import cross from "../../images/cross-icon.png";
import React from "react";

import {EditButtons} from "./edit-buttons";

export default function TodoItems(props) {

    /**
     * Controlled component which provides the list of todo items
     */

    const {todoItems, handleDeleteItem, handleEditItem, handleSetCompleted} = props

    if (todoItems.length) {
        return (
            <table className='todo-list'>
                <thead>
                <div className='todo-count'><div >{todoItems.length}</div></div>
                <tr>
                    <th>completed?</th>
                    <th>due date</th>
                    <th>message</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    todoItems.map((row, key) => {
                            let rowKey = key;
                            return (
                                <tr data-key={rowKey} key={key}>{Object.keys(row).map((item, key) => {
                                    if (item === 'completed') {
                                        return <td data-key={rowKey} onClick={(event) => {
                                            handleSetCompleted(event, rowKey)
                                        }}>{row[item] ? <img src={check} alt='done'/> :
                                            <img src={cross} alt='not done'/>}</td>
                                    } else {
                                        return (<td data-key={rowKey} key={key}>
                                            <div>{row[item]}</div>
                                        </td>)
                                    }
                                })}
                                    {todoItems.length > 0 && <EditButtons rowKey={rowKey}
                                                                          handleDeleteItem={handleDeleteItem}
                                                                          handleEditItem={handleEditItem}/>
                                    }
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        )
    } else {
        return <div style={{textAlign: 'center'}}><h2>You currently have no todo items to complete 🎉</h2></div>
    }
}
