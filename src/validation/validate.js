export function validateFormField(state) {
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
