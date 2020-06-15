import React from "react";

import editIcon from "../../images/edit-icon.png";
import deleteIcon from "../../images/delete-icon.png";

export function EditButtons(props) {

    /**
     * Controlled component which provides the edit and delete buttons
     */

    const {rowKey, handleEditItem, handleDeleteItem} = props

    return (
        <td>
            <div>
                <div className={'image-button'}
                     data-key={rowKey}
                     onClick={handleEditItem}
                > edit
                    <img src={editIcon}/>
                </div>
                <div className={'image-button'}
                     data-key={rowKey}
                     onClick={handleDeleteItem}
                > delete
                    <img src={deleteIcon}/>
                </div>
            </div>
        </td>
    )
}
