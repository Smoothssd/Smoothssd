import * as actionTypes from "./constant"


export const changeAction = (type) => ({
    type: actionTypes.CHANGETYPE,
    Changetype: type
})


export const setshopCarAction = (value) => ({
    type: actionTypes.SHOPCAR,
    value
})

export const delCarAction = (id) => ({
    type: actionTypes.DELCAR,
    id
})

