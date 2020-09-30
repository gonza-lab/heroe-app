import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

Storage.prototype.setItem = jest.fn();

describe('Pruenas en <PrivateRoute />', () => {
  test('Debe mostrar el componente si esta autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          path="/"
          component={() => <span>Listo !</span>}
          location={{ pathname: '/marvel' }}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/marvel'
    );
  });

  test('No debe mostrar el componente si no esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          path="/"
          component={() => <span>Listo !</span>}
          location={{ pathname: '/marvel' }}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
  });
});
