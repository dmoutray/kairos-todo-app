export function validateFormField(state) {
    /**
     * validate the form fields for a given todo item.
     */

    if (!state.message) {
        return {
            status: true,
            message: 'Todo message cannot be empty'
        }
    } else if (!state.dateValue) {
        return {
            status: true,
            message: 'date field cannot be empty'
        }
    } else {
        return 'true'
    }
}
