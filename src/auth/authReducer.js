import { types } from "../types/types";

//LOS REDUCER SON FUNCIONES PURAS

//el 'action' es la accion que va modificar el state
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}
