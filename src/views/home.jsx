import React from "react";

import Header from "../components/header";
import cross from "../images/cross-icon.png"
import check from "../images/tick-icon.png"
import deleteIcon from "../images/delete-icon.png"
import editIcon from "../images/edit-icon.png"
import Notification from "../components/notification";
import TodoForm from "../components/todo-form";


const EDIT_DEFAULT = {
    edit: {
        status: false,
        rowId: undefined,
        message: '',
        dateValue: ''
    }
}

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: sessionStorage.getItem('userName') || 'User',
            dateValue: '',
            message: '',
            edit: EDIT_DEFAULT,
            error: {
                status: false,
                message: ''
            },
            dateList: [],
            todoItems: [
                {
                    message: "Book MOT for car",
                    dateValue: '2020-06-01',
                    completed: false,
                },
                {
                    message: "Take a holiday",
                    dateValue: '2020-06-03',
                    completed: false
                },
                {
                    message: "Service motorbike",
                    dateValue: '2020-06-02',
                    completed: false
                }
            ]
        }

    }

    sortTodoItems = () => {
        let sortDate = this.state.todoItems.sort(function (a, b) {
            let dateA = new Date(a.dateValue), dateB = new Date(b.dateValue);
            return dateB - dateA
        });
        let sortCompleted = sortDate.sort(function (a, b) {
            let dateA = a.completed, dateB = b.completed
            return dateB - dateA;
        });
        this.setState({todoItems: sortCompleted})
    }

    validateFormField = (state) => {
        if (!state.message) {
            return {
                status: true,
                message: 'Todo message cannot be empty'
            }
        } else if (!state.dateValue) {
            return {
                status: true,
                message: 'dateValue field cannot be empty'
            }
        } else {
            return 'true'
        }
    }

    handleAddItem = () => {
        this.setState((state) => {

                let valid = this.validateFormField(state)

                if (valid === 'true') {
                    let newTodo = {
                        message: state.message,
                        dateValue: state.dateValue,
                        completed: false,
                    }
                    return {
                        todoItems: [...state.todoItems, newTodo],
                        dateValue: '',
                        message: ''
                    }
                } else {
                    return {error: {...valid}}
                }

            }, () => {
                this.sortTodoItems()

                setTimeout(() => {
                    this.setState({
                        error: {...this.state.error, status: false}
                    },)
                }, 5000)
            }
        )
    }

    handleChange = (event) => {
        /**
         * Generic method to update the local state with a given event key:value pair
         */

        let {key} = event.target.dataset
        let {value} = event.target

        let updateObject = {}
        updateObject[key] = value

        this.setState(updateObject);
    }

    handleEditItem = (event) => {
        /**
         * Update the state to reflect changes made by the edit function.
         */

        let {key} = event.target.dataset;

        this.setState({
            edit: {
                status: true,
                rowId: key,
                message: this.state.todoItems[key].message,
                dateValue: this.state.todoItems[key].dateValue,
            }
        })
    }

    handleDeleteItem = (event) => {
        /**
         * Update the state to reflect changes made by the delete function.
         */

        let {key} = event.target.dataset;

        this.setState((state) => {
                let clone = [...state.todoItems]
                clone.splice(key, 1)
                if (clone.length === 0) {
                    return {todoItems: []}
                }
                return {todoItems: clone}
            }
        )
    }


    editButtons = (rowkey) => {
        return (
            <td colSpan={'1'}>
                <div className={'image-button'}
                     data-key={rowkey}
                     onClick={this.handleEditItem}
                > edit
                    <img src={editIcon} onClick={null}/>
                </div>
                <div className={'image-button'}
                     data-key={rowkey}
                     onClick={this.handleDeleteItem}
                > delete
                    <img src={deleteIcon} onClick={null}/>
                </div>
            </td>
        )
    }

    handleUpdateItem = (event) => {
        /**
         * Generic method to update the local state with a given event key:value pair
         */

        let {key} = event.target.dataset
        let {value} = event.target

        this.setState((state) => {
            let updateObject = {...state.edit}
            updateObject[key] = value
            return {edit: updateObject}
        });
    }

    handleEdit = () => {
        /**
         * Generic method to update the edit state with a given event key:value pair
         */

        this.setState((state) => {
                let valid = this.validateFormField(state.edit)
                if (valid === 'true') {
                    let updateObject = [...state.todoItems]
                    updateObject[state.edit.rowId].message = state.edit.message
                    updateObject[state.edit.rowId].dateValue = state.edit.dateValue
                    return {
                        todoItems: updateObject,
                        edit: EDIT_DEFAULT
                    }
                } else {
                    return {error: {...valid}}
                }

            }, () => {
                this.sortTodoItems()
                setTimeout(() => {
                    this.setState({
                        error: {...this.state.error, status: false}
                    },)
                }, 5000)
            }
        )
    }

    render() {
        return (
            <>
                <Header userName={this.state.userName}/>
                <div className='flex-container'>
                    <div className={'modal'} hidden={!this.state.edit.status}>
                        <div className={'modal-body'}>
                            <div className='todo-form'>
                                <input type='text' data-key='message' value={this.state.edit.message}
                                       onChange={this.handleUpdateItem}/>
                                <input type='date' data-key='dateValue' value={this.state.edit.dateValue}
                                       onChange={this.handleUpdateItem}/>
                                <button className={'button primary'} onClick={this.handleEdit}>
                                    Edit todo
                                </button>
                            </div>
                            <button onClick={() => {
                                this.setState({edit: EDIT_DEFAULT})
                            }}>CANCEL
                            </button>
                        </div>
                    </div>

                    <Notification error={this.state.error}/>

                    <TodoForm message={this.state.message}
                              dateValue={this.state.dateValue}
                              handleAddItem={this.handleAddItem}
                              handleChange={this.handleChange}
                              type={'add'}
                    />

                    <table className='todo-list'>
                        <tbody>
                        {this.state.todoItems.length > 0 && this.state.todoItems.map((row, key) => {
                            let rowkey = key;
                            return (
                                <tr data-key={rowkey} key={key}>{Object.keys(row).map((item, key) => {
                                    if (item === 'completed') {
                                        return <td data-key={rowkey} onClick={() => {
                                            this.setState((state) => {
                                                    return [...state.todoItems][rowkey].completed = true
                                                }
                                                , this.sortTodoItems)
                                        }}>{row[item] ? <img src={check}/> : <img src={cross}/>}</td>
                                    } else {
                                        return (<td data-key={rowkey}>{row[item]}</td>)
                                    }
                                })}
                                    {this.state.todoItems.length > 0 && this.editButtons(rowkey)}
                                </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
