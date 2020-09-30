import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en DashboardRoutes', () => {
  test('Debe mostrar la pantalla de marvel por defecto', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{ user: { logged: true }, dispatch() {} }}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find('#marvel-screen').exists()).toBe(true);
  });

  test('Debe mostrar la pagina de DC', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{ user: { logged: true }, dispatch() {} }}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

      expect(wrapper.find('#dc-screen').exists()).toBe(true);
  });
});
