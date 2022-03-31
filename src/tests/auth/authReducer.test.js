import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        //le pasamos el estado inicial y una accion
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('Debe de autenticar y colocar el "name" del usuario', () => {
        const action={
            type:types.login,
            payload:{name:'Edwin'},
        }

        //le pasamos el estado inicial y una accion
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, name: 'Edwin' });
    });

    test('Debe de debolver el logged en false y borrar el name', () => {
        const action={
            type:types.logout
            
        }

        //le pasamos el estado inicial y una accion
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: false});
    });




});