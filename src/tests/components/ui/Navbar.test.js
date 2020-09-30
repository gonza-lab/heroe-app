import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import { contextValue, historyMock } from '../../fixtures/default';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Pruebas en <Navbar />', () => {
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Gonzalo');
  });

  test('Se debe llamar el dispatch correctamente', () => {
    wrapper.find('.btn').simulate('click');

    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
});
