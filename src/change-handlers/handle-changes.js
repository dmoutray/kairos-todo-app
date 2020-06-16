import EDIT_DEFAULT from '../views/todo-app'

import {validateFormField} from "../validation/validate";

export function handleAddItem () {
    /**
     * Generic function to handle the add item action
     */
    this.setState((state) => {

            let valid = validateFormField(state)

            if (valid === 'true') {
                let newTodo = {
                    completed: false,
                    dateValue: state.dateValue,
                    message: state.message
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

export function handleChange(event) {
    /**
     * Generic function to change the local state with a given event key:value pair
     * Note this function could also replace handleUpdateItem but I ran out of time.
     */

    let {key} = event.target.dataset
    let {value} = event.target

    let updateObject = {}
    updateObject[key] = value

    this.setState(updateObject);
}

export function handleEditItem(event) {
    /**
     * Update the state to reflect changes made by the edit action.
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

export function handleDeleteItem(event) {
    /**
     * Update the state to reflect changes made by the delete action.
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

export function handleUpdateItem(event) {
    /**
     * Generic function to update the local state with a given event key:value pair
     */

    let {key} = event.target.dataset
    let {value} = event.target

    this.setState((state) => {
        let updateObject = {...state.edit}
        updateObject[key] = value
        return {edit: updateObject}
    });
}

export function handleEdit() {
    /**
     * Generic function to update the edit state with a given event key:value pair
     */

    this.setState((state) => {
            let valid = validateFormField(state.edit)
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

export function handleSetCompleted(event, rowKey) {
    /**
     * Generic function to update the completed state with a given to-do key:value pair
     */

    this.setState((state) => {
            return [...state.todoItems][rowKey].completed = true
        }
        , this.sortTodoItems)
}

export function handleResetEditState() {
    this.setState({edit: EDIT_DEFAULT})
}
