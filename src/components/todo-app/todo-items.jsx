import React from "react";
import {CSSTransitionGroup} from 'react-transition-group';

import {ButtonBar} from "./button-bar";

export default function TodoItems(props) {

    /**
     * Controlled component which provides the list of todo items
     */

    const {
        todoItems,
        edit,
        handleDeleteItem,
        handleEdit,
        handleEditItem,
        handleResetEditState,
        handleSetCompleted,
        handleUpdateItem
    } = props

    function buildTodoContent(row, key, todoItemKey, item) {
        if (item === 'dateValue') {
            return <div
                className='todo-due-date'>{new Date(row[item]).toDateString()}</div>
        } else if (item === 'message') {
            return <div className={todoItems[todoItemKey].completed ? 'todo-message completed' : 'todo-message'}
            >{row[item]}</div>
        }
        return (
            <div className='todo-info' data-key={todoItemKey} key={key}>
                <div>{row[item]}</div>
            </div>
        )
    }

    function showEditForm(todoItemKey) {
        if (edit.rowId === todoItemKey.toString()) {
            return (
                <div className='todo-form edit'>
                    <input type='text' data-key='message' value={edit.message}
                           onChange={handleUpdateItem} placeholder={`Edit your todo here`}/>
                    <input type='date' data-key='dateValue' value={edit.dateValue}
                           onChange={handleUpdateItem}/>
                    <div>
                        <button className={'button primary'} data-key={todoItemKey}
                                onClick={handleEdit}>update
                        </button>
                        <button className={'button secondary'} data-key={todoItemKey}
                                onClick={handleResetEditState}>cancel
                        </button>
                    </div>
                </div>
            )
        }
    }

    if (todoItems.length) {
        return (
            <div className='todo-list'>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnter={true}
                    transitionLeave={true}>
                    <div className='todo-count'>
                        <h3> You have {todoItems.length} outstanding item{todoItems.length > 1 ? 's' : ''} to
                            complete </h3>
                    </div>
                    {
                        todoItems.map((row, key) => {
                                let todoItemKey = key;
                                return (
                                    <>
                                        <div className='todo-card'
                                             data-key={todoItemKey}
                                             style={{backgroundColor: todoItems[key].completed ? '#98ee99' : ''}}
                                             key={key}>
                                            <div className='todo-card-body'>
                                                <div className='todo-card-content'>
                                                    {Object.keys(row).map((item, key) => {
                                                        return buildTodoContent(row, key, todoItemKey, item)
                                                    })
                                                    }
                                                </div>
                                                <div className='button-bar'>
                                                    {todoItems.length > 0 && <ButtonBar todoItemKey={todoItemKey}
                                                                                        handleDeleteItem={handleDeleteItem}
                                                                                        handleEditItem={handleEditItem}
                                                                                        handleSetCompleted={handleSetCompleted}
                                                    />
                                                    }
                                                </div>
                                            </div>
                                            {showEditForm(todoItemKey)}
                                        </div>

                                    </>
                                )
                            }
                        )
                    }
                </CSSTransitionGroup>
            </div>
        )
    } else {
        return (
            <div className='todo-empty'>
                <h1>You currently have no todo items to complete 🎉</h1>
            </div>
        )
    }
}
