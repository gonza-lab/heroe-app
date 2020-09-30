import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />', () => {
  test('Debe mostrar el login si no estoy autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{ user: { logged: false }, dispatch() {} }}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('div').at(0).hasClass('login-screen')).toBe(true);
  });

  test('Debe mostrar el componente marvel si esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={{ user: { logged: true }, dispatch() {} }}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
