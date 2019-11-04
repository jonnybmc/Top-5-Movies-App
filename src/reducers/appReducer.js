export default (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_MOVIES':
            return {
                result: action.payload
            }
            default:
                return state
    }
}