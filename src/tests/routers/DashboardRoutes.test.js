import { DashBoardRoutes } from "../../routers/DashBoardRoutes";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en DashboardRoutes', () => {
    const contexValue = {
        user: {
            logged: true,
            name: 'Kevin'
        }
    }

    test('Debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>

            </AuthContext.Provider>
        );
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Kevin');
    })
})