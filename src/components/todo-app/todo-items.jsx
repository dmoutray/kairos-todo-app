import React from "react";
import {CSSTransitionGroup} from 'react-transition-group';

import {EditButtons} from "./edit-buttons";

export default function TodoItems(props) {

    /**
     * Controlled component which provides the list of todo items
     */

    const {todoItems, handleDeleteItem, handleEditItem, handleSetCompleted} = props

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
                                let rowKey = key;
                                return (
                                    <div className='todo-card' data-key={rowKey}
                                         key={key}>{Object.keys(row).map((item, key) => {
                                             if(item === 'dateValue'){
                                                 return <div className='todo-due-date'>{ new Date(row[item]).toDateString()}</div>
                                             } else if (item === 'message'){
                                                 return <div className='todo-message'>{ row[item]}</div>
                                             }
                                        return (
                                            <div className='todo-info' data-key={rowKey} key={key}>
                                                <div>{row[item]}</div>
                                            </div>
                                        )
                                    })}
                                        <div className='button-bar'>
                                            {todoItems.length > 0 && <EditButtons rowKey={rowKey}
                                                                                  handleDeleteItem={handleDeleteItem}
                                                                                  handleEditItem={handleEditItem}
                                                                                  handleSetCompleted={handleSetCompleted}/>
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </CSSTransitionGroup>
            </div>
        )
    } else {
        return (
            <div className='todo-list' style={{textAlign: 'center'}}>
                <h2>You currently have no todo items to complete 🎉</h2>
            </div>
        )
    }
}
