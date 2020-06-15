import React from "react";

export default function TodoList(props) {
    return (
        <table className='todo-list'>
            <tbody>
            <tr>
                {Object.keys(props.todoItems[0]).map(function (item) {
                        return <th>{item}</th>
                    }
                )}
            </tr>
            {props.todoItems.map((row, key) => {
                return (
                    <tr key={key}>{Object.keys(row).map((item, key) => {
                        if (item === 'completed') {
                            return <td>{row[item] ? '✔' : '✘'}</td>
                        } else {
                            return <td>{row[item]}</td>
                        }
                    })}
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    )
}
