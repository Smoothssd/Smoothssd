import * as actionTypes from "./constant"

const initialState = {
    type: 'en',
    list: []

}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGETYPE:
            return { ...state, type: action.Changetype }
        case actionTypes.SHOPCAR:
            return { ...state, list: [...state.list, action.value] }
        case actionTypes.DELCAR:
            return {
                ...state, list: state.list.filter(item => {
                    return item.id !== action.id
                })
            }
        default:
            return state
    }
}

export default reducer


