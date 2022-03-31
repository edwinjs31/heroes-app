import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";


describe('Pruebas en AppRouter', () => {

    test('debe de mostrar el login si no está autenticado', () => {
        //será el estado del usuario para las validaciones
        const contexValue = {
            user: {
                logged: false
            }
        }
        
        //montamos los componentes, devolverá un componente
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        console.log(wrapper.html());

    });

    test('debe de mostrar el componente Marver si está autenticado', () => {
        //será el estado del usuario para las validaciones
        const contexValue = {
            user: {
                logged: true,
                name: 'Kevin'
            }
        }

        //montamos los componentes, devolverá un componente
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();

    })
})